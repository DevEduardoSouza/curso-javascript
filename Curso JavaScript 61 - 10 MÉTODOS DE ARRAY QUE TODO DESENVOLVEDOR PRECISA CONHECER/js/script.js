// Adicione o c�digo JavaScript aqui

const data = [
  { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
  { name: "João", age: 18, sallary: 1500, driverLicense: false },
  { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
  { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
  { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];


/*-----------{1 - Reverse}-----------*/
// Pode se utilizado em filtros
const reverseDate = data.reverse();
console.log(reverseDate);

/*-----------{2 - find}-----------*/
// Posso encontra um elemento dentro do array
// Find faz um loop em cada um dos arrays, e retorna só um RESULTADO
// Nesse exemplo vai retornar usuários com sllary acima de 5000
const highSallary = 5000;
const highestSallary = data.find((user)=> user.sallary > highSallary);
console.log(highestSallary);

/*-----------{3 - findIndex}-----------*/
// Vai retornar o index de um elemento
const lowerSallry = data.findIndex((user)=> user.sallary> 0 && user.sallary < 2000);
console.log(lowerSallry);

data[lowerSallry].sallary += 200;
console.log(data);

/*-----------{4 - includes}-----------*/
// Verifica se meu array contém algum dado especifico
// Retorna um boolean
const numbers  =  [1,2,3,4,5];

const hasFour = numbers.includes(4);
console.log(hasFour);

/*-----------{5 - map}-----------*/
data.map((user)=>{
  user.newsletter = false;
});
console.log(data);
