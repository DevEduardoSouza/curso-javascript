// Adicione o c�digo JavaScript aqui

/** Acessando elementos através do DOM
 * 
 *  - Acessar o DOM caracteriza-se por identificar um elemento do HTML através de metódos
 *  - Podemos acessar por tags, ids, classes 
 */


// Acessar elemento por TAG
// getElements pode retornar vários
var subtitulo = document.getElementsByTagName('h2')[0];
console.log(subtitulo); 

var lis = document.getElementsByTagName('li');
console.log(lis);


// Acessar por ID
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

// Acessar por classe
var itens = document.getElementsByClassName('item');
console.log(itens);