// Adicione o c�digo JavaScript aqui

/** Inserindo elementos (appendChild)
 * 
 *  - Podemos inserir um elemento dentro de outro
 * 
 */

// Criar elemento

var el = document.createElement('div');

// Adicionar uma classe ao elemento
el.classList = "div-teste";
console.log(el);


var container = document.querySelector(".container");
container.appendChild(el);



