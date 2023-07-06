// Adicione o c�digo JavaScript aqui

/** MÉTODOS NÚMERICOS
 *  - O objeto Number é pai dos números que contém métodos  
 * 
 */

// parseFloat -> transformar um "valor" em float

// String para Float
console.log(parseFloat('7.9999'));
// Mesma coisa só que add o objeto Number
console.log(Number.parseFloat('7.9999'));


// parseInt -> transformar um "valor" em Int
console.log(Number.parseInt(5.9999));
console.log(Number.parseInt('10'));

// toFixed -> limitar as casa décimais de um número
// Ele arredondar
console.log( 55.55.toFixed(1));

// isNaN -> vai verificar se algo é diferente de um número
console.log(isNaN(10)); //false
console.log(isNaN("teste")); //true

