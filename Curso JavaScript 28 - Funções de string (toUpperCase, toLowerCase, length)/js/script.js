// Adicione o c�digo JavaScript aqui

/** MÉTODOS DE STRING
 *  - O objeto String possui métodos úteis
 * 
 */

// length -> vai retornar a quantidade de elementos/caracteres da string

var nome = "Eduardo";

console.log(nome.length);

// indexOf -> vai dar o index do caractere/palavra que eu queira encontrar
// se não achar ele retorna -1
console.log(nome.indexOf("Eduardo"));

var frase = "Estou aprendendo JavaScript";
console.log(frase.indexOf("JavaScript"));

// Slice via remover uma parte da string, ele recebe o incio e fim com parâmetro

var js = frase.slice(17, 27);

console.log(js);

// replace posso trocar um palavra da String, ele recebe a string a ser trocada logo depois string a ser adicionada 

var novaFrase = frase.replace("Estou", "estou,");

console.log(novaFrase);