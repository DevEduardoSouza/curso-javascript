// Adicione o c�digo JavaScript aqui

/** Trocando elementos (replaceChild)
 * 
 * - Posso substituir uma tag por outra de modo fácil
 */


//  1° Criar o elemento
var el = document.createElement('div');

el.classList = 'conateiner2';

var texto = document.createTextNode('Texto da div');

el.appendChild(texto);

console.log(el);

// Agora selecionar o elemento que eu quero trocar
var div = document.querySelector('.container');


// Selecionar o pai do elemento que quero trocar
var body = document.querySelector('body');
// OU
var body = div.parentNode;


/** trocar os elementos
 *  1° pai.replaceChild
 *  2° pai.replaceChild(elemento que vai entrar, )
 *  3° pai.replaceChild(elemento que vai entrar, elemento qu vai sair)
 */

body.replaceChild(el, div);

