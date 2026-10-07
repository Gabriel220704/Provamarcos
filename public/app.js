const $ = selector => document.querySelector(selector);
let tasks = [], editingId = null;
async function api(path, options) {
 const response = await fetch(path, options); const data = await response.json();
 if (!response.ok) throw new Error(data.error || 'Falha ao realizar operação.'); return data;
}
function render() {
 $('#tasks').replaceChildren(); $('#count').textContent = `${tasks.length} tarefa(s)`;
 if (!tasks.length) { const empty=document.createElement('p'); empty.className='empty'; empty.textContent='Tudo começa com um primeiro passo. Crie sua primeira tarefa.'; $('#tasks').append(empty); }
 for (const task of tasks) {
  const card=document.createElement('article'), title=document.createElement('h3'), description=document.createElement('p'), metadata=document.createElement('small'), edit=document.createElement('button');
  title.textContent=task.title; description.textContent=task.description || 'Sem descrição'; metadata.textContent=`${task.priority} · ${task.status}`;
  edit.textContent='Editar'; edit.className='secondary'; edit.addEventListener('click',()=>openEditor(task));
  card.append(title,description,metadata,edit); $('#tasks').append(card);
 }
}
function openEditor(task) {
 editingId=task?.id??null; $('#task-form').reset(); $('#form-heading').textContent=task?'Editar tarefa':'Nova tarefa';
 $('#title').value=task?.title??''; $('#description').value=task?.description??''; $('#priority').value=task?.priority??'Média';
 $('#form-error').textContent=''; $('#editor').showModal(); $('#title').focus();
}
$('#new-task').addEventListener('click',()=>openEditor()); $('#cancel').addEventListener('click',()=>$('#editor').close());
$('#task-form').addEventListener('submit',async event=>{
 event.preventDefault(); $('#save').disabled=true;
 try {
  const data=Object.fromEntries(new FormData(event.target));
  const task=await api(editingId?`/api/tasks/${editingId}`:'/api/tasks',{method:editingId?'PUT':'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
  tasks=editingId?tasks.map(item=>item.id===task.id?task:item):[task,...tasks]; render(); $('#editor').close(); $('#feedback').textContent='Tarefa salva com sucesso.';
 } catch(error) { $('#form-error').textContent=error.message; } finally { $('#save').disabled=false; }
});
api('/api/tasks').then(data=>{tasks=data;render();}).catch(error=>{$('#feedback').textContent=error.message;});
