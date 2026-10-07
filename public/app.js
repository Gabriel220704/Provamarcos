const $ = selector => document.querySelector(selector);
let tasks = [], editingId = null;
let filter = 'Todas';
for (const label of ['Todas', 'Pendentes', 'Concluídas']) {
 const button = document.createElement('button');
 button.textContent = label;
 button.addEventListener('click', () => { filter = label; render(); });
 $('#filters').append(button);
}
async function api(path, options) {
 let response;
 try { response = await fetch(path, options); } catch { throw new Error('Não foi possível conectar ao servidor. Tente novamente.'); }
 const data = await response.json();
 if (!response.ok) throw new Error(data.error || 'Falha ao realizar operação.'); return data;
}
function render() {
 $('#tasks').replaceChildren(); $('#count').textContent = `${tasks.length} tarefa(s)`;
 for (const button of $('#filters').children) { button.className=button.textContent===filter?'active':'secondary'; button.setAttribute('aria-pressed',String(button.textContent===filter)); }
 const visible=tasks.filter(task=>filter==='Todas'||task.status===(filter==='Pendentes'?'Pendente':'Concluída'));
 if (!visible.length) { const empty=document.createElement('p'); empty.className='empty'; empty.textContent=tasks.length?'Nenhuma tarefa neste filtro.':'Tudo começa com um primeiro passo. Crie sua primeira tarefa.'; $('#tasks').append(empty); }
 for (const task of visible) {
  const card=document.createElement('article'), title=document.createElement('h3'), description=document.createElement('p'), metadata=document.createElement('small'), edit=document.createElement('button');
  title.textContent=task.title; description.textContent=task.description || 'Sem descrição'; metadata.textContent=`${task.priority} · ${task.status}`;
  edit.textContent='Editar'; edit.className='secondary'; edit.setAttribute('aria-label',`Editar: ${task.title}`); edit.addEventListener('click',()=>openEditor(task));
  card.className=task.status==='Concluída'?'completed':'';
  metadata.className=`badge priority-${['Baixa','Média','Alta'].indexOf(task.priority)}`;
  const complete=document.createElement('button'); complete.className='secondary'; complete.textContent=task.status==='Concluída'?'Reabrir':'Concluir';
  complete.setAttribute('aria-label',`${complete.textContent}: ${task.title}`);
  complete.addEventListener('click',async()=>{
   complete.disabled=true; edit.disabled=true;
   try {
    const updated=await api(`/api/tasks/${task.id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({...task,status:task.status==='Concluída'?'Pendente':'Concluída'})});
    tasks=tasks.map(item=>item.id===updated.id?updated:item); render(); $('#feedback').textContent='Status atualizado.';
   } catch(error) { $('#feedback').textContent=error.message; complete.disabled=false; edit.disabled=false; }
  });
  const dates=document.createElement('p'); dates.className='dates'; dates.textContent=`Criada em ${new Date(task.created_at).toLocaleString('pt-BR')}${task.updated_at?` · Atualizada em ${new Date(task.updated_at).toLocaleString('pt-BR')}`:''}`;
  card.append(title,description,metadata,edit,complete,dates); $('#tasks').append(card);
 }
}
function openEditor(task) {
 editingId=task?.id??null; $('#task-form').reset(); $('#form-heading').textContent=task?'Editar tarefa':'Nova tarefa';
 $('#title').value=task?.title??''; $('#description').value=task?.description??''; $('#priority').value=task?.priority??'Média';
 $('#form-error').textContent=''; $('#editor').showModal(); $('#title').focus();
}
$('#new-task').addEventListener('click',()=>openEditor()); $('#cancel').addEventListener('click',()=>$('#editor').close());
$('#task-form').addEventListener('submit',async event=>{
 event.preventDefault();
 if ($('#save').disabled) return;
 const savedId=editingId;
 $('#save').disabled=true; $('#cancel').disabled=true; $('#new-task').disabled=true;
 try {
  const data=Object.fromEntries(new FormData(event.target));
  const task=await api(savedId?`/api/tasks/${savedId}`:'/api/tasks',{method:savedId?'PUT':'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
  tasks=savedId?tasks.map(item=>item.id===task.id?task:item):[task,...tasks]; render(); $('#editor').close(); $('#feedback').textContent='Tarefa salva com sucesso.';
 } catch(error) { $('#form-error').textContent=error.message; } finally { $('#save').disabled=false; $('#cancel').disabled=false; $('#new-task').disabled=false; }
});
$('#editor').addEventListener('cancel',event=>{if($('#save').disabled) event.preventDefault();});
$('#new-task').disabled=true;
render();
api('/api/tasks').then(data=>{tasks=data;render();$('#new-task').disabled=false;}).catch(error=>{$('#feedback').textContent=`${error.message} Atualize a página para tentar novamente.`;});
