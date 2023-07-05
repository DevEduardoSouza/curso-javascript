// Adicione o c�digo JavaScript aqui

/** Alterando DOM com FOR
 */

var lista = ['laranja', 'maça', 'uva'];

var ul = document.createElement('ul');

var body = document.getElementsByTagName('body');

body[0].appendChild(ul);

var listaUl = document.getElementsByTagName('ul');


for (let index = 0; index < lista.length; index++) {
   var li = document.createElement('li');

   var texto = document.createTextNode(lista[index]);

   li.appendChild(texto);

   listaUl[0].appendChild(li);
  
}