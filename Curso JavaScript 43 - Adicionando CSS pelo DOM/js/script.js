// Adicione o c�digo JavaScript aqui

/** Adicionando CSS pelo DOM
 * 
 * - o CSS fica de forma inline
 */


// Selecionar o elemento
var box = document.querySelector('.box');
// Adicionar o estilo
/**
 * 1° elemento selecionado -> box
 * 2° proriedade style     -> box.style
 * 3° qual estilo mudar    -> box.style.background
 * 4° atribuir novo valor  -> box.style.background = 'blue';
 */
box.style.background = 'blue';



// Adicionar vários estilos (cssText)
box.style.cssText = 'color:red; width:600px;'




// regras
/**
 * 
 * 
 *  para elementos que seja assim -> background-color -> backgroundColor 
 * 
 */