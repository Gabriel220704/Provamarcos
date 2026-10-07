import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { once } from 'node:events';
import { createApp } from '../server.js';

test('API valida tarefas, edita, conclui e persiste após reiniciar', async () => {
 const folder=mkdtempSync(join(tmpdir(),'taskflow-'));
 let server;
 const start=async()=>{server=createApp(join(folder,'test.db')); server.listen(0,'127.0.0.1'); await once(server,'listening'); return `http://127.0.0.1:${server.address().port}`;};
 const stop=async()=>{const closed=once(server,'close');server.close();await closed;};
 try {
  let base=await start();
  const request=async(path,method,data)=>{const res=await fetch(base+path,{method,headers:{'Content-Type':'application/json'},body:data===undefined?undefined:JSON.stringify(data)});return {status:res.status,data:await res.json()};};
  assert.equal((await request('/api/tasks','GET')).data.length,0);
  for(const data of [{title:' ',priority:'Alta'},{title:'Teste',priority:'Urgente'},{title:'Teste',priority:'Alta',status:'Inválido'},{title:'Teste',priority:'Alta',description:42},null]) assert.equal((await request('/api/tasks','POST',data)).status,400);
  const created=await request('/api/tasks','POST',{title:'  Estudar  ',description:'Capítulo 1',priority:'Alta',status:'Concluída'});
  assert.equal(created.status,201); assert.equal(created.data.status,'Pendente'); assert.equal(created.data.title,'Estudar'); assert.ok(created.data.created_at);
  const id=created.data.id;
  const edited=await request(`/api/tasks/${id}`,'PUT',{title:'Revisar',description:'Capítulo 2',priority:'Baixa'});
  assert.equal(edited.data.title,'Revisar'); assert.equal(edited.data.priority,'Baixa'); assert.equal(edited.data.status,'Pendente'); assert.ok(edited.data.updated_at);
  assert.equal((await request('/api/tasks/99999','PUT',{title:'Teste',priority:'Média'})).status,404);
  const completed=await request(`/api/tasks/${id}`,'PUT',{...edited.data,status:'Concluída'}); assert.equal(completed.data.status,'Concluída');
  for(const path of ['/','/app.js','/style.css']) assert.equal((await fetch(base+path)).status,200);
  assert.equal((await fetch(base+'/server.js')).status,404);
  await stop(); base=await start();
  const persisted=(await request('/api/tasks','GET')).data; assert.equal(persisted.length,1); assert.equal(persisted[0].status,'Concluída');
  assert.equal((await request(`/api/tasks/${id}`,'PUT',{...persisted[0],status:'Pendente'})).data.status,'Pendente');
 } finally {if(server?.listening) await stop(); rmSync(folder,{recursive:true,force:true});}
});
