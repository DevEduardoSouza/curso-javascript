// Adicione o c�digo JavaScript aqui
const changeThemeBtn = document.querySelector('#change-theme');
changeThemeBtn.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
});