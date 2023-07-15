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
const url = "https://jsonplaceholder.typicode.com/post";
// Selcionar o loading
const loading = document.querySelector('#loading');
// Selecionar o post container
const postsContainer = document.querySelector('#post-container');