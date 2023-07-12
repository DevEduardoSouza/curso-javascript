// Adicione o c�digo JavaScript aqui

/** Async e Await - Funções assíncronas em JavaScript
 * 
 * - As funções assícronas funcionam como Promises, porém com sintax mais simples
 * - Precisamos declarar a função com a palvara  async
 * - E quando precisamos aguarda por algo a instrução precisa de await
 * 
 *  
 */


// Sintaxe

// function primeiraFuncao() {
  
//   return new Promise((resolve) => {
    
//     setTimeout(()=>{
//       console.log('Esperou');

//       resolve();
//     }, 2000);

//   });
// }

// async function segundaFuncao() {
//   console.log('inciou');

//   // vai esperar o resultado da função para prosseguir
//   await primeiraFuncao();

//   console.log('terminou');
// }
// segundaFuncao();

// Prático
function getUser(id) {
  
  // Acessar um api que usuários cadastrados
  return fetch(`https://reqres.in/api/user?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
}

// Eu preciso do await para que o código que retorna um promisse ser executado linha a linha
async function showUserName(id) {
  // posso usar o try cath para exebir um erro se acontecer
  try{
    const user = await getUser(id);    //Estou esperando minha função retornar 
    console.log(`O nome do usuário é: ${user.data.name}`);
  }catch(err){
    console.log(err);
  }
  
}

showUserName(10);
showUserName(5);