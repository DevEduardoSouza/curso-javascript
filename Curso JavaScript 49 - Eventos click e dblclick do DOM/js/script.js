// Adicione o c�digo JavaScript aqui

/** Eventos click e dblclick do DOM
 * 
 * 
 */

var btn = document.querySelector('#btn');
var btn2 = document.querySelector('#btn2');

var title = document.querySelector('h1');


// addEventListener
btn.addEventListener('click', ()=>{

  title.style.background = '#000';
  
  console.log('Clicou');
});

// Doule click
btn2.addEventListener('dblclick', ()=>{
  console.log('Double click');
});