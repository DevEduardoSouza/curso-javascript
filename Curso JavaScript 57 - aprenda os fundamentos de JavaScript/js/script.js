// Adicione o c�digo JavaScript aqui

// Revisão e mais!

/* ---------------{Console}--------------- */

console.log('Depurando o código'); //Depurar o código
console.error('Erro!');  //Mensagem de erro
console.warn('Aviso!');  //Mensagem de Aviso 


/* ---------------{Variáveis}--------------- */

var x = 10; 
// Mais mordenas
let y = 20;   //Consigo mudar os valores, escopo de bloco
const z = 30; //NÃO Consigo mudar os valores, escopo de bloco

if(true){
  let y = 25;
}
console.log(x);
console.log(y);
console.log(z);

/* ---------------{Tipos de dados}--------------- */

const name = 'Eduardo'; //String
console.log(name);
console.log(typeof name); //typeof vai sempre informa o tipo de dado

const shirtsQty = 4; //Númerico
console.log(shirtsQty);
console.log(typeof shirtsQty);

const isApproved = false; //Bollean, true ou false
console.log(isApproved);
console.log(typeof isApproved);

let surname = null; //Indica que essa variável ainda não tem valor
console.log(surname);
console.log(typeof surname);

let age; // Undefined o dado não foi definido
console.log(age);
console.log(typeof age);

const languages = ['C','Js','Java']; //Array
console.log(languages);
console.log(typeof languages);

// object literals -> não veio aparti de uma classe
const user = {
  email:'eduardo@gmail.com',
  age: 21
};
console.log(user);
console.log(typeof user);


/* ---------------{Métodos de string}--------------- */

const fullName = "Eduardo souza";
console.log(fullName.length); //Propriedades que dar a quantidade de caracteres

const stringToArray = fullName.split(' '); //Seperar e colocar em um array
console.log(stringToArray);

console.log(fullName.toLocaleUpperCase()); //Deixar tudo em caixa Alta
console.log(fullName.toLocaleLowerCase()); //Deixar tudo em caixa Baixa

console.log(fullName.indexOf('Eduardo')); //Encontrar um palavra em uma string se não tiver retorna -1
console.log(fullName.slice(0,8)); //Pegar uma parte da string , tenho que informar onde começa e termina

