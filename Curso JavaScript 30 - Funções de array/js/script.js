// Adicione o c�digo JavaScript aqui

/** Funções de array
 *  - Facilita para add, remover buscar do array
 * 
 */


// length -> vai retornar o número total de um array

let nomes = ['Eduardo', 'Amanda' , 'Beatriz', 'João', 'Maria'];

console.log(nomes.length);

// push -> adicionar elemento no fim do array
nomes.push("Almarir");
console.log(nomes);
// pop -> remover um elemento do fim do array
nomes.pop();
console.log(nomes);

// unshift -> adicionar no inicio do array
nomes.unshift('Souza');
console.log(nomes);

// shift -> remover do início
nomes.shift();
console.log(nomes);
