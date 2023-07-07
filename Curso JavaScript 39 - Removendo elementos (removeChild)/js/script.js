// Adicione o c�digo JavaScript aqui

/** Removendo elementos (removeChild)
 * 
 *  - Posso remover um elemento por completo ou um filho dele
 */



// Removendo o elemento filho

// Selecionar o elemento
var container = document.querySelector(".container");
// Tenho que passar o filho
var p = document.querySelector(".container p");
container.removeChild(p);


// remover o elemento 

//selecionar o elemento
var lista = document.querySelector(".lista");
// Apenas chamar o método remove
lista.remove(); 