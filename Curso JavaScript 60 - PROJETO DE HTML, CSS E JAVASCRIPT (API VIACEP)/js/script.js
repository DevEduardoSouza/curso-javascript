// Adicione o c�digo JavaScript aqui

// Selecionar os elementos
const addressForm = document.querySelector('#address-form');
const cepInput = document.querySelector('#cep');
const addressInput = document.querySelector('#address');
const cityInput = document.querySelector('#city');
const neigthborhoodInput = document.querySelector('#neigthborhood');
const regionInput = document.querySelector('#region');
const fadeElement = document.querySelector("#fade");
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

// Pegar o endereço quanto eu tiver os 8 dígitos no CEP
cepInput.addEventListener('keyup', (e)=>{

  const inputValue = e.target.value;

  // Verificar se temos a quantidade de dígitos necessária
  if(inputValue.length === 8){
    getAddress(inputValue);
  }
});

// Buscar na API
const getAddress = async (cep) => {
  toggleLoader();
  console.log(cep);
  
  // tirar o cursor do cep enquanto está carregando
  cepInput.blur();
  
  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`
  const response = await fetch(apiUrl);
  const data = await response.json();
  
  
  // Mostra erro e resetar form
  if(data.erro){
    // Método nativo que vai limpar o formulário
    addressForm.reset();
    toggleLoader();
    // Mostra a message
    toggleMessage('CEP inválido, tente novamente.');
    return;
  }

  addressInput.value = data.logradouro;
  cityInput.value = data.localidade;
  // neigthborhoodInput.value = data.bairro;
  regionInput.value = data.uf;
  toggleLoader();

}

// Mostra ou esconder loading
const toggleLoader = () =>{
  const loaderElement = document.querySelector("#loader");
  
  fadeElement.classList.toggle('hide');
  loaderElement.classList.toggle('hide');
}

// Mostra ou esconder mensagem
const toggleMessage = (msg) => {

  const messageElement = document.querySelector('#message');

  const messageElementText = document.querySelector('#message p');

  messageElementText.innerText = msg;

  fadeElement.classList.toggle('hide');
  messageElement.classList.toggle('hide');

}

// Close message model 
closeButton.addEventListener('click', ()=>{
  toggleMessage();
});