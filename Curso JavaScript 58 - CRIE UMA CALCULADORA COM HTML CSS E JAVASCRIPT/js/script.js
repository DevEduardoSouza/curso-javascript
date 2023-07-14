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


  // Add um digito no "visor"
  addDigit(digit){
    // Verificar se a operação atual já tem um 'ponto'
    if(digit === '.' && this.currentOperationText.innerText.includes('.')){
      return;
    }
    
    // Colocar o digito no visor
    this.currentOperation = digit;
    this.updateScreen();
  }

  processOparation(operation){
    // Verificar se o valor de baixo está vazio
    if(this.currentOperationText.innerText === '' && operation !== 'C'){
      // Mundança de operação
      if(this.previousOperationText.innerText !== ''){
        this.changeOperation(operation);
      }
      return;
    }

    // Tenho que pegar o valor atual e o  anterior
    let operationValue;
    const previous = +this.previousOperationText.innerText.split(" ")[0];
    const current = +this.currentOperationText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "DEL":
        this.processDelOperator();
        break;
      case "CE":
        this.processClearCurrentOperation();
        break;
      case "C":
        this.processClearOperation();
        break;

      default:
        return;
    }

  }
  
  // método para atualizar a screen
  updateScreen(operationValue = null, operation = null,  current = null, previous = null){
    
    if(operationValue === null){
      this.currentOperationText.innerText += this.currentOperation;
    }else{

      if(previous === 0){
        operationValue = current;
      }
      // Adicionar o valor de baixo pra cima
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = '';
    }
  }

  changeOperation(operation){
    
    const mathOperations = ['*','/','+','-'];
    if(!mathOperations.includes(operation)){
      return;
    }

    // Remover o último caractere -> exempo 123 + -> 123 operation
    this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0,-1) + operation;
  }

  // Deletar o último dígito
  processDelOperator(){
    this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0,-1);
  }

  // Deletar a operação atual
  processClearCurrentOperation(){
    this.currentOperationText.innerText = '';
  }
  // Deletar todas as operações
  processClearOperation(){
    this.currentOperationText.innerText = '';
    this.previousOperationText.innerText = '';
  };

  // Pocessar todos as operações da calculadora
  
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((button)=>{
  button.addEventListener('click', (e)=>{
    // com o event -> tenho várias propriedades
    const value = e.target.innerText;
    
    // esse "+" vai tentar converter esse valor em um número
    if(+value >= 0 || value === '.'){
      calc.addDigit(value);
    }else{
      calc.processOparation(value);
    }

  });
});