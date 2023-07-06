// Adicione o c�digo JavaScript aqui

/** Funções de Array PARTE 2
 * 
 */


// SPLICE -> posso adicionar um elemento no meio do array
var array = [1,2,3,4,5];  

// 1° index do elemento onde adicionar
// 2° deletar 0 elementos
// 3° adiconar o elemento novo
array.splice(2, 0 , 555);
console.log(array);
// posso remover um elemento tbm
// vou remover o elemento do index 4
array.splice(4, 1);
console.log(array);



// INDEXOF vai achar o index de um elemento
console.log(array.indexOf(1));



// JOIN  ->  vai trasformar arrays em strings
var array2 = ["eduardo", "souza", "teste"];
console.log(array2.join(" "));

// REVERSE ->  inverter um array
console.log(array2.reverse());


