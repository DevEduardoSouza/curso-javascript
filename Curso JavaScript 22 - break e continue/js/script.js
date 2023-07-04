// Adicione o c�digo JavaScript aqui

/**   BREAK e CONTINUE
 * 
 *   - break -> vai para um instrução
 *   - continue -> pular uma instrução
 *   - usado na maioria das vezes em loops
 * 
 */

for (let index = 0; index < 10; index++) {
  console.log(index);
  if(index === 5){
    break;
  }

}


for (let index = 0; index < 100; index+=10) {
  
  if(index === 50){
    continue;
  }
  console.log(index);
  
}

