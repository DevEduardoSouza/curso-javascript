// Adicione o c�digo JavaScript aqui

const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade'); 

const toggleModal = () =>{
  [modal, fade].forEach((el)=> el.classList.toggle('hide'));
}
// Add envento de uma forma mais prática
[openModalButton, closeModalButton, fade].forEach((el)=>{
  el.addEventListener('click', () => toggleModal());
})