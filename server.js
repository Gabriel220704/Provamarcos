import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { mkdirSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
export function createApp(path) {
 const db = new DatabaseSync(path);
 db.exec(`CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL CHECK(length(trim(title)) > 0), description TEXT NOT NULL, priority TEXT NOT NULL CHECK(priority IN ('Baixa','Média','Alta')), status TEXT NOT NULL CHECK(status IN ('Pendente','Concluída')), created_at TEXT NOT NULL, updated_at TEXT)`);
 const json = (res, code, data) => { res.writeHead(code, {'Content-Type':'application/json; charset=utf-8'}); res.end(JSON.stringify(data)); };
 const server = createServer(async (req, res) => {
  try {
   const url = new URL(req.url, 'http://localhost');
   const match = url.pathname.match(/^\/api\/tasks\/(\d+)$/);
   if (url.pathname === '/api/tasks' && req.method === 'GET') return json(res,200,db.prepare('SELECT * FROM tasks ORDER BY id DESC').all());
   if ((url.pathname === '/api/tasks' && req.method === 'POST') || (match && req.method === 'PUT')) {
    req.setEncoding('utf8');
    let raw = ''; for await (const chunk of req) { raw += chunk; if (Buffer.byteLength(raw)>16384) return json(res,413,{error:'Dados muito grandes.'}); }
    let data; try { data=JSON.parse(raw); } catch { return json(res,400,{error:'JSON inválido.'}); }
    if (!data || typeof data.title !== 'string' || !data.title.trim() || data.title.trim().length>200) return json(res,400,{error:'Informe um título de até 200 caracteres.'});
    if (!['Baixa','Média','Alta'].includes(data.priority)) return json(res,400,{error:'Prioridade inválida.'});
    if (data.description !== undefined && (typeof data.description !== 'string' || data.description.length>5000)) return json(res,400,{error:'Descrição inválida.'});
    if (data.status !== undefined && !['Pendente','Concluída'].includes(data.status)) return json(res,400,{error:'Status inválido.'});
    const now=new Date().toISOString(); let id;
    if (match) {
     id=Number(match[1]);
     if (!Number.isSafeInteger(id) || id < 1) return json(res,404,{error:'Tarefa não encontrada.'});
     const task=db.prepare('SELECT * FROM tasks WHERE id=?').get(id);
     if (!task) return json(res,404,{error:'Tarefa não encontrada.'});
     db.prepare('UPDATE tasks SET title=?,description=?,priority=?,status=?,updated_at=? WHERE id=?').run(data.title.trim(),data.description??'',data.priority,data.status??task.status,now,id);
    } else id=Number(db.prepare('INSERT INTO tasks (title,description,priority,status,created_at) VALUES (?,?,?,?,?)').run(data.title.trim(),data.description??'',data.priority,'Pendente',now).lastInsertRowid);
    return json(res,match?200:201,db.prepare('SELECT * FROM tasks WHERE id=?').get(id));
   }
   const assets={'/':['index.html','text/html'],'/app.js':['app.js','text/javascript'],'/style.css':['style.css','text/css']};
   if(req.method==='GET' && assets[url.pathname]) { const [file,type]=assets[url.pathname]; const body=await readFile(new URL(`./public/${file}`,import.meta.url)); res.writeHead(200,{'Content-Type':`${type}; charset=utf-8`}); return res.end(body); }
   json(res,404,{error:'Página não encontrada.'});
  } catch(error) { console.error(error); json(res,500,{error:'Não foi possível realizar a operação.'}); }
 });
 server.on('close',()=>db.close()); return server;
}
if(process.argv[1] && resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
 const port=Number(process.env.PORT??3000);
 if (!Number.isInteger(port) || port<1 || port>65535) {
  console.error('PORT deve ser um número entre 1 e 65535.');
  process.exit(1);
 }
 mkdirSync(new URL('./database/',import.meta.url),{recursive:true});
 const app=createApp(fileURLToPath(new URL('./database/taskflow.db',import.meta.url)));
 app.on('error',error=>{
  console.error(error.code==='EADDRINUSE'?`A porta ${port} está ocupada. Defina PORT para usar outra porta.`:error.message);
  process.exit(1);
 });
 app.listen(port,'127.0.0.1',()=>console.log(`Task Flow IA: http://localhost:${port}`));
}
