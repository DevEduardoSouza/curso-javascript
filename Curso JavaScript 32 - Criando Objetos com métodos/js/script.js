// Adicione o c�digo JavaScript aqui

/** Criando Objetos com métodos
 *  
 */

let pessoa = {
  nome: 'Eduardo',
  idade: 21,
  falar: function name() {
    console.log(this.nome + this.idade);
  },
  soma: function name(a, b) {
    return a+b;
  }
};

pessoa.falar()
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.soma(4,5));