// Selecionar os elementos

//Selecionar o "visor" da calculadora
const previousOperationText = document.querySelector('#previous-operation'); 
//Selecionar o que o usuário está digitando no momento
const currentOperationText = document.querySelector('#current-operation');
// Selecionar os Btns
const buttons = document.querySelectorAll('#buttons-container button');

class Calculator{
  constructor(previousOperationText, currentOperationText){
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((button)=>{
  button.addEventListener('click', (e)=>{
    // com o event -> tenho várias propriedades
    const value = e.target.innerText;
    
    // esse "+" vai tentar converter esse valor em um número
    if(+value >= 0 || value === '.'){
      console.log(value);
    }else{
      console.log("op" +value);
    }

  });
});