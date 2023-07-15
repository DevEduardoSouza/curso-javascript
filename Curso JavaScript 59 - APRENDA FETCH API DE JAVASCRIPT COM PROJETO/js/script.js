// Adicione o c�digo JavaScript aqui

/** Fetch API
 * - um meio nativo de realizar requisições a APIs com JavaScript
 * - Podemos realizar Promise ou async/await
 * - Se a requisição for GET é preciso passar a url do recurso que estamos resgatando da API
 * - Caso seja outros verbos, podemos configurar a requisição com: method, body, headers;
 * - O fetch é muito utilizado com frameworks /libs como: React, Vue e Angular
 */


// Criar variáveis que serão usadas ao longo do código

// Url da API
const url = "https://jsonplaceholder.typicode.com/posts";
// Selcionar o loading
const loading = document.querySelector('#loading');
// Selecionar o post container
const postsContainer = document.querySelector('#post-container');

// Criar variáveis que serão usadas para um post só
const postPage = document.querySelector('#post');
const postContainer = document.querySelector('#post-container');
const commentsContainer = document.querySelector('#comments-container');

// Pegar post por id
// Esse obj tem paramentros da url
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

// Pegar todos os posts
async function getAllPosts() {
  const response = await fetch(url);
  const data = await response.json();

  // Esconder o elemento que mostra que está carregando
  loading.classList.add('hide');

  // Agora add no dom
  data.map((post)=>{

    // criar os elementos para ser renderizado na tela
    const div = document.createElement('div');
    const title = document.createElement('h2');
    const body = document.createElement('p');
    const link = document.createElement('a');

    // Com elementos criados agora tenho que preencher com conteúdo
    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = "Ler";
    link.setAttribute("href", `post.html?id=${post.id}`);
    

    // Add os elementos na div
    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);
   
    // Add a div no postsContainer
    postsContainer.appendChild(div);
   
  }); 

}

// Pegar um post individual
async function getPost(id) {
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`)
  ]);

  const dataPost = await responsePost.json();
  const dataComments = await responseComments.json();

  loading.classList.add('hide');
  postPage.classList.remove('hide');
}


if(!postId){
  getAllPosts();
}else{
  getPost(postId);
}