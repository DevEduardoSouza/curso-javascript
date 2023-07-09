// Adicione o c�digo JavaScript aqui

/** setTimeout e setInterval
 * 
 *  - Podemos executar em tempos e tempos
 *  - Um dos argumentos é um callback
 */


// setTimeout -> vai executar uma função depois de um tempo
// 1° recebo uma função
// 2° recebo o tempo em milisegundos
setTimeout(function teste() {
  console.log('Oi')
}, 2000);

// setInterval -> tem um intervalo
// ou seja vai repetir a função a cada 2 segundos  
setInterval(()=>{
  console.log('olá');
}, 2000);