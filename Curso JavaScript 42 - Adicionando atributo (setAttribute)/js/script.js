// Adicione o c�digo JavaScript aqui

/** Adicionando atributo (setAttribute)
 * 
 * - posso mudar , alt , src , id , classe e outros.
 * - pode alterar qualquer atributo via JS
 */

var subtitulo = document.querySelector('.title');

subtitulo.setAttribute('class' , 'novaClasse');
console.log(subtitulo);

var btn = document.querySelector('.btn');

btn.setAttribute('disabled', 'disabled');

// Remover atributo

subtitulo.removeAttribute('novaClasse');