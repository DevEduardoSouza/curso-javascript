// Adicione o c�digo JavaScript aqui

/** Callback functions
 * 
 *  -Permite executar uma função depois  de uma detarminada ação
 *  -Fundametal para entender a parte de  assíncrona  do JS
 * 
 */



function exibir(num) {
  console.log(num);
}


function soma(a, b, callback) {
  var op = a + b;
  callback(op);
}
function multiplicacao(a, b, cb) {
  var op = a * b;
  cb(op);
}

soma(5 , 5, exibir);
multiplicacao(3,2, exibir);