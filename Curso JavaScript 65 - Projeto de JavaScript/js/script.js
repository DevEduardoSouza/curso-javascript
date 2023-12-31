// Adicione o c�digo JavaScript aqui

// Selecionar os elementos
const generatePasswordButton = document.querySelector('#generate-password');
const generatedPasswordElement = document.querySelector('#generated-password');



// Funções

// Letras, números e simbolos
const getLetterLowerCase = () =>{
  return String.fromCharCode( Math.floor(Math.random() * 26) + 97);
}
const getLetterUpperCase = () =>{
  return String.fromCharCode( Math.floor(Math.random() * 26) + 65);
}
const getNumber = () =>{
  return Math.floor(Math.random() * 10).toString();
}
const getSymbol = () =>{
  const symbols = "(){}[]=<>/.,!@$%#*&-+";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = (getLetterLowerCase, getNumber, getLetterUpperCase, getSymbol) =>{
    let password = '';
    let passwordLength = 10;

    const generators = [
      getLetterLowerCase,
      getNumber,
      getSymbol,
      getLetterUpperCase
    ];

    for (i = 0; i < passwordLength; i = i + generators.length) {
      generators.forEach(() => {
        const randomValue =
          generators[Math.floor(Math.random() * generators.length)]();
  
        password += randomValue;
      });
    }

    password = password.slice(0, passwordLength);

    generatedPasswordElement.style.display = 'block';
    generatedPasswordElement.querySelector('h4').innerText = password;

}

// Eventos
generatePasswordButton.addEventListener('click',()=>{
  generatePassword(getLetterLowerCase, getNumber, getLetterUpperCase, getSymbol);
});