// Adicione o c�digo JavaScript aqui

/**  LET e CONST
 * 
 *  - Com let e const pode criar escopo em instruções
 *  - Deixando o código mais confiável
 */


// const não pode ser alterada
const y = 10;


let x = 5;

x = 12;

if(true){
  // Variável local só vai "funcionar" nesse if
  let x = 20;
  console.log(x);
}
console.log(x);