// Adicione o c�digo JavaScript aqui

/** JSON
 *  - Um formato de representação de dados
 *  - Formato chave  valor
 *  - è leve para ser enviado por requisições
 *  - Muito utilizado em API e também arquivos de configurações
 *  - 
 * 
 */

/** ANOTAÇÕES dp teste.json
  {
    nome : Eduardo,
    idade : 21,
    esta_estudando : true,
    detalhes_curso : {
      nome : IFBA,
      curso : ADS,
      total_semestre : 6
    },
    linguagens : [JS, Java, C]
  }
 */


  const objs = [
    {
      nome : 'Eduardo',
      idade : 21,
      esta_estudando : true,
      detalhes_curso : {
        nome : 'IFBA',
        curso : 'ADS',
        total_semestre : 6
      },
      linguagens : ["JS", "Java", "C"],
    },
    {
      nome : 'Teste',
      idade : 25,
      esta_estudando : false,
      detalhes_curso : {
        nome : null,
        curso : null,
        total_semestre : null
      },
      linguagens : ["TE", "Java", "C"],
    },
  ]

  // Como enviar para uma API
  // Converte o Objeto para JSON antes de enviar para uma API
  const jsonData =  JSON.stringify(objs);
  console.log(jsonData);
  
  // Coverte a String para json quando receber da API
  const objData = JSON.parse(jsonData);
  console.log(objData);

  objData.map((pessoa)=>{
    console.log(pessoa.nome);
  });


