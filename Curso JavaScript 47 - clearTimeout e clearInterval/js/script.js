// Adicione o c�digo JavaScript aqui

/** clearTimeout e clearInterval
 * 
 * - Podemos por fim no setTimeout e clearInternal
 * - 
 */





// clearTimeout
var x = 0;

var timer = setTimeout(()=>{
  console.log('O x é 0');
},2000);

x = 5;


// Com isso não vou ter a execução do setTimeout
if(x>0){
  clearTimeout(timer);
  console.log('O x passou de 0'); 
}

// clearInternal

var interval = setInterval(()=>{
  console.log("intervalo");
}, 500);


setTimeout(()=>{
  console.log('PArou o intervalo');
  clearInterval(interval);
}, 2000);






