// Adicione o c�digo JavaScript aqui

// Função dark mode
function toggleDarkModel() {
  document.body.classList.toggle('dark');
}

// Função load light ou dark
function loadTheme() {
  const darkMode = localStorage.getItem('dark');
  if(darkMode){
    toggleDarkModel();
  }
  
}
loadTheme();

const changeThemeBtn = document.querySelector('#change-theme');
changeThemeBtn.addEventListener('change', ()=>{
  toggleDarkModel();

  // Salvar ou remocer dark mode
  localStorage.removeItem('dark');


  if(document.body.classList.contains('dark')){
    localStorage.setItem('dark', 1);
  }
});