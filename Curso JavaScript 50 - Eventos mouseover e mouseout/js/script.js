// Adicione o c�digo JavaScript aqui

/** Eventos mouseover e mouseout
 * 
 *  - Quando o mouse sai ou entra em um elemento
 */

var title = document.querySelector('h1');

title.addEventListener('mouseover', ()=>{
 console.log('Entrou com mouse');
});
title.addEventListener('mouseout', ()=>{
 console.log('saiu com mouse');
});