// Adicione o c�digo JavaScript aqui

/**  Criando elementos com DOM (createElement)
 *  - sempre o elemento criado deve ter um "pai"
 * 
 */


// createElement -> vai posibilitar a cria um elemento, tem que passar o qual a tag
var newParagrafo = document.createElement("p");

console.log(newParagrafo);

// Agora preciso criar um um texto para esse elemento
var text = document.createTextNode("Este é o texto");
console.log(text);

// agora preciso inserir o texto no elemento criado, para isso tenha a função appendChild
newParagrafo.appendChild(text);

// Por fim inserir o elemento no HTML
var body = document.querySelector("body");

body.appendChild(newParagrafo);

// Adicionando em um div
var container = document.querySelector(".container");

var el = document.createElement("span");

el.appendChild(document.createTextNode("Olá span"));

container.appendChild(el);

