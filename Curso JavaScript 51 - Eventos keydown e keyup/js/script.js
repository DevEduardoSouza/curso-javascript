// Adicione o c�digo JavaScript aqui


/** Eventos keydown e keyup
 * - Eventos acionados quanto é pressionado um tecla
 * 
 */

document.addEventListener('keydown', (event)=>{

  if(event.key === 'Enter'){
    console.log('Apertou o enter')
  }
});
document.addEventListener('keyup', (event)=>{
  

    if(event.key === 'Enter'){
      console.log('Soltou o enter')
    }
  
});