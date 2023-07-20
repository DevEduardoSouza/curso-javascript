// Adicione o c�digo JavaScript aqui

// Seleção de elementos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

let oldInputValue;
// Funções 
const saveTodo = (text) =>{
  
  const todo = document.createElement('div');
  todo.classList.add('todo');

  const todoTitle = document.createElement('h3');
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement('button');
  doneBtn.classList.add('finish-todo')
  doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  todo.appendChild(doneBtn);

  const editBtn= document.createElement('button');
  editBtn.classList.add('edit-todo')
  editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
  todo.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('remove-todo')
  deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  todo.appendChild(deleteBtn);

  todoList.appendChild(todo);

  //Limpar o input quando add 
  todoInput.value = '';
  //Focar no input quando add 
  todoInput.focus();

}

const toggleForms = () =>{
  // editForm.classList.toggle('hide');
  // todoForm.classList.toggle('hide');
  // todoList.classList.toggle('hide');

  // Forma mais simples
  [editForm, todoList, todoForm].forEach( (el)=> el.classList.toggle('hide'));
}

const updateTodo = (text) => {
  const todos = document.querySelectorAll('.todo');
  console.log(oldInputValue);

  todos.forEach((todo)=>{
    let todoTitle = todo.querySelector('h3');

    if(todoTitle.innerText === oldInputValue){
      todoTitle.innerText = text;
    }
  })
} 

// Eventos
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const valueInput = todoInput.value;
  if (valueInput) {
    // Salvar o toDo
    saveTodo(valueInput);
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  // Selecionar o elemento pai mais próximo
  const parentEL = targetEl.closest('div');


  // Como nesse projeto não tenho id para diferenciar cada todo
  // Vou fazer isso usando o titulo
  let todoTitle;
  if(parentEL && parentEL.querySelector('h3')){
    todoTitle = parentEL.querySelector('h3').innerText;
  }

  if(targetEl.classList.contains('finish-todo')){
    parentEL.classList.toggle('done');
  }

  if(targetEl.classList.contains('remove-todo')){
    parentEL.remove();
  }

  if(targetEl.classList.contains('edit-todo')){
    toggleForms();
    editInput.value = todoTitle;
    oldInputValue = todoTitle;
    
  }

});

cancelEditBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  toggleForms();
});

editForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  const editInputValue = editInput.value;
  if (editInputValue) {
    // Atualizar
    updateTodo(editInputValue);
  }

  toggleForms();

});

