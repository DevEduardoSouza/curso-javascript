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


/* ---------------{Métodos de array}--------------- */

const list = ['a', 'b', 'c', 'd', 'e'];

console.log(list.length); //Retornar a quantidade de elemento

console.log(list[2]); //Buscar um elemento pelo index

list[5] = 'f'; //Add um novo elemento
console.log(list);

console.log(list[list.length - 1 ]); //Encotrar o último elemento da lista


// Adicionar um elemento ao fim da lista
list.push('g');
console.log(list);

// Remover um elemento ao fim da lista
list.pop();
console.log(list);

// Remover do inicio elemento da list
list.shift();
console.log(list);

// Adicionar o inicio elemento da list
list.unshift('z');
console.log(list);


/* ---------------{Objetos}--------------- */

const product = {
  name : 'Camisa',
  price : 15.98,
  inStock: true,
  sizes: ['G', 'M', 'P'],
  'Main color' :  'blue'
}

console.log(product);
console.log(product.name);
console.log(product['Main color']);

// Destructuring -> extrair variáveis de um obj
const {price, inStock} = product;
console.log(price);
console.log(inStock);


/* ---------------{JSON}--------------- */

const objs = [
  {
    nome : 'Eduardo',
    idade : 21,
    esta_estudando : true,
    detalhes_curso : {
      nome : 'IFBA',
      curso : 'ADS',
      total_semestre : 6
    },
    linguagens : ["JS", "Java", "C"],
  },
  {
    nome : 'Teste',
    idade : 25,
    esta_estudando : false,
    detalhes_curso : {
      nome : null,
      curso : null,
      total_semestre : null
    },
    linguagens : ["TE", "Java", "C"],
  },
]

// Como enviar para uma API
// Converte o Objeto para JSON antes de enviar para uma API
const jsonData =  JSON.stringify(objs);
console.log(jsonData);

// Coverte a String para json quando receber da API
const objData = JSON.parse(jsonData);
console.log(objData);

objData.map((pessoa)=>{
  console.log(pessoa.nome);
});


/* ---------------{Estrutura condicionais}--------------- */

const a = 10;

if(a > 8){
  console.log('a é maior que 8');
}else{
  console.log('a NÃO é maior que 8');
}

//ternário
let testingANumber = 3 > 2 ? true : false;
console.log(testingANumber);


/* ---------------{Estrutura de repetição}--------------- */

//While
const myList = [1,2,3,4,5];
let counter = 0;

while (counter < myList.length) {
  console.log(myList[counter]);
  counter++;
}

// For
const mySecondList = ['a','b','c','d','e'];

for (let index = 0; index < mySecondList.length; index++) {
  console.log(mySecondList[index]);
}

/* ---------------{Métodos de array repetição}--------------- */
const names = ['Eduardo', 'Souza', 'Silva'];

//ForEach -> Utilização -> Apenas para imprimir
names.forEach((name)=>{
  console.log(name);
})

// Map -> Utilização -> Quando for para modificar algo
names.map((name)=>{
  console.log(name);
})

// Filter -> fazer um filtro dos dados
const bigNumbers = [1,2,3,4,5,10,100,1000].filter((number)=>{
  return number >= 5;
});
console.log(bigNumbers);


/* ---------------{Funções}--------------- */

function minhaFuncao() {
  console.log('Oi função');
}
minhaFuncao();

function nomeCompleto(nome, sobrenome) {
  return `nome completo: ${nome} ${sobrenome}`;
}

const meuNomeCompleto = nomeCompleto('Eduardo', 'Souza');
console.log(meuNomeCompleto);

// Arrow functions
const myArrowFunction = (a, b)=>{
  return a + b;
};
console.log(myArrowFunction(2, 9));

const mySimpleArrowFunction = (a,b) => a+b;
console.log(mySimpleArrowFunction(5,5));


/* ---------------{Classes}--------------- */

class Product{

  constructor(name, price){
    this.name = name
    this.price = price;
  }

  productDetails(){
    return`o nome do produto é ${this.name} e custa ${this.price}`
  }
}

const produto = new Product('Camisa', 11);
const produto2 = new Product('Camisa Azul', 25);

console.log(produto.name);
console.log(produto.price);
console.log(produto.productDetails());

// herança

class SuperProduct extends Product{
  constructor(name, price, size){
    super(name, price);
    this.size = size;
  }

  // static
  static sayHello(){
    console.log('Olá');
  }
}

const tenis = new SuperProduct('Tenis', 25.99, 45);
console.log(tenis.name);
console.log(tenis.price);
console.log(tenis.size);

SuperProduct.sayHello();

/* ---------------{DOM}--------------- */

// Seleção de elemento
const title = document.getElementById('title');
console.log(title);

// querySelector
const sameTitle = document.querySelector('#title');
console.log(sameTitle);

const texts = document.querySelectorAll('.text');
console.log(texts);
console.log(texts[1]);

texts.forEach((text)=>{
  console.log(text);
});


// Manipulação de elemento
title.textContent = 'newTitle';
console.log(title);

// Alterando o HTML
texts[1].innerHTML = '<span>Usando o innerHTML para alterar o html</span>';

// Add o novo estilo
texts[1].style.backgroundColor = 'red';

// Add uma nova classe
texts[1].classList.add('my-class');
// remove uma nova classe
texts[1].classList.remove('my-class');
// remover um elemento do dom
texts[1].remove();

// Eventos

const btn =  document.querySelector('#btn');

btn.addEventListener('click', ()=>{
  console.log('Clicou');
});
