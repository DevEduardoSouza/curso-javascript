// Adicione o c�digo JavaScript aqui

/** THIS
 * - this vai se referir a instância e pode acessar suas propriedades
 * 
 */


console.log(this);

let pessoa = {
  nome: 'Eduardo',
  idade: 21,
  falar: function name() {
    console.log(this.nome + this.idade);
  }
};