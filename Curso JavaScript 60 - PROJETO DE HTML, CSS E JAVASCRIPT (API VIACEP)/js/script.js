// Adicione o c�digo JavaScript aqui

// Selecionar os elementos
const addressForm = document.querySelector('#address-form');
const cepInput = document.querySelector('#cep');
const addressInput = document.querySelector('#address');
const cityInput = document.querySelector('#city');
const neigthborhoodInput = document.querySelector('#neigthborhood');
const regionInput = document.querySelector('#region');
// Inputs que vai ser manipulados em massa
const formsInputs = document.querySelectorAll('[data-input]');

const closeButton = document.querySelector('#close-message');

// Validar o input de CEP
cepInput.addEventListener('keypress', (e)=>{
  const onlyNumbers = /[0-9]/; 
  const key = String.fromCharCode(e.keyCode);
  
  // Permiti apenas números
  // Vai cair nesse if se o usuário não digitar um número
  if(!onlyNumbers.test(key)){
    e.preventDefault();
    return;
  }

});