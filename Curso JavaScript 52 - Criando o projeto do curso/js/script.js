// Adicione o c�digo JavaScript aqui

// 1° Mapear o btn para ADD
const addBtn = document.querySelector('#add-btn');

// Função para adicionar uma nova task
function addTask() {
 
    // Pegar o título da tarefa
    const taskTitle = document.querySelector('#task-title').value;

    // Fazer a verificação se estar vazio
    if(taskTitle){
      // Clonar o template
      const template = document.querySelector('.template');

      // cloneNode -> vai permiti que minha newTask receba a estrutura html do template e seus filhos
      const newTask = template.cloneNode(true);
      
      // Adicionar o título
      newTask.querySelector('.task-title').textContent = taskTitle;

      //Remover as classes que não serão mais usadas 
      newTask.classList.remove('hide', 'template');

      // Adicionar essa terafa na lista
      const list = document.querySelector('#task-list');
      list.appendChild(newTask);


      // Adicionar o evento de remover
      const removeBtn = newTask.querySelector('.remove-btn');

      removeBtn.addEventListener('click' , ()=>{
        // Passando o pai do elemento de remover, que é a task
         removeTask(removeBtn.parentNode);
      });



      // Adicionar o evento de completar tarefa
      const doneBtn = newTask.querySelector('.done-btn');

      doneBtn.addEventListener('click', ()=>{
        completeTask(doneBtn);
      });

      // limpar input
      document.querySelector('#task-title').value = '';

      
    }else{
      // Personalizar uma mensagem de erro

      // Adicionar o erro na tela
      document.querySelector('.msg-erro').classList.remove('hide');
      
    }
}


// Função de remover tarefa
function removeTask(task) {
  task.remove();
}

// Função de completar tarefa
function completeTask(task) {
  console.log(task);
  const taskToComplete = task.parentNode;

  // toggle -> se estiver com done ele tira se não tiver ele coloca
  taskToComplete.classList.toggle('done');
}

// Adiconar um evento de click no btn ADD
addBtn.addEventListener('click', (e)=>{ 
  // Como eu não quero submeter o formulário adiciono preventDefault
  e.preventDefault();

  // Remover o erro da tela
  document.querySelector('.msg-erro').classList.add('hide');

  addTask();
});