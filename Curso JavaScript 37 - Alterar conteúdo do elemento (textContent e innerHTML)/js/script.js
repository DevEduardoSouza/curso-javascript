// Adicione o c�digo JavaScript aqui

/** Alterar conteúdo do elemento (textContent e innerHTML)
 *  - alterar texto do HTML
 */


// Selecionar o elemento que será alterado
var paragrafo = document.querySelector("#paragrafo");


// innerHTML
paragrafo.innerHTML = "Testando";
console.log(paragrafo);

// textContent
var titulo = document.querySelector("#titulo");
titulo.textContent = "testano o ";