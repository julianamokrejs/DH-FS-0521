let pets = [
  {
    nome: 'Yoshi',
    nomeDono: 'Victor',
    idade: 7,
    tipo: 'Cachorro',
    raca: 'Akita Inu',
    peso: 40,
    genero: 'Macho',
    cor: 'ruivo',
    vacinado: true
  },
  {
    nome: 'Pituco',
    nomeDono: 'Victor',
    idade: 2,
    tipo: 'ave',
    raca: 'Calopsita',
    peso: 0.5,
    genero: 'Macho',
    cor: 'cinza',
    vacinado: true
  },
  {
    nome: 'Pitty',
    nomeDono: 'Rose',
    idade: 2,
    tipo: 'ave',
    raca: 'Agapornis',
    peso: 0.5,
    genero: 'Fêmea',
    cor: 'verde',
    vacinado: true
  },
  {
      nome: 'Bixano',
      nomeDono: 'Rose',
      idade: 10,
      tipo: 'Cachorro',
      raca: 'PastorAlemão',
      peso: 0.5,
      genero: 'Fêmea',
      cor: 'Amarelo',
      vacinado: true
    },
]


// Desafio1 : Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomePets" que exiba no terminal o NOME de todos os pets. 
// (utilizar o foreach)
const listarNomePets = () => {
  pets.forEach(pet => {
    console.log(pet.nome)
  })
}
// listarNomePets();


//Desafio2: Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomeDonoPets" que exiba no terminal o NOMEDONO de todos os pets.  (Usar for of)
const listarNomeDonoPets = () => {
  for(const pet of pets) {
    console.log(pet.nomeDono)
  }
}
// listarNomeDonoPets();


//Desafio3: Utilizando o Array de Pets disponibilizado, criar uma função "ListarTipo" que irá receber um parâmetro com o tipo e retornar todos os pets desse tipo. (Usar o Filter)
const listarTipo = (tipo) => pets.filter(function(pet) {
    if (pet.tipo =="Cachorro") {
    var nomePet = pet.nome;
    console.log(nomePet)
    }
  })

//ou
// function listarTipo(tipo) {
//   let tipoPet = pets.filter(pet => {
//     return pet.tipo == tipo
//   })
//   console.log(tipoPet);
// }


//Desafio4: Utilizando o Array de Pets disponibilizado, criar uma função "DataDeCadastro". Essa função deve retornar um array onde será adicionado a data de hoje em todos os objetos. O nome da nova propreie e dade deve ser "DataCadastro". (Usar Object Date e MAP)
function dataDeCadastro() {
  let dataCorrente = new Date();
  let petsNovo = pets.map(pet => {
    //Objeto -> var.property, var['property']
    //Array -> var['property']
    pet['dataCadastro'] = dataCorrente;
    pet.teste = "testado e aprovado kkk"
    return pet; //sempre necessário return no map e no filter
  })
  return petsNovo
}

// console.log(dataDeCadastro());


//Desafio5: Utilizando o Array de Pets disponibilizado, criar uma função "ListaDadosPet" que irá receber como parâmetro um objeto. Essa função deve exibir os dados de um pet. (usar Desestruturação de objetos)
const listarDadosPet = (objPet) => {
  const { nome, nomeDono, idade, tipo, raca, peso, genero, cor, vacinado } = objPet;
  return console.log(
      `Nome: ${nome}
      Nome do dono: ${nomeDono}
      Idade: ${idade}
      Tipo: ${tipo}
      Raça: ${raca}
      Peso: ${peso}
      Genero: ${genero}
      Cor: ${cor}
      Precisa de vacina? ${vacinado ? 'Não' : 'Sim'}`
  )
}


//Desafio6: Utilizando o Array e a função do desafio 5 , criar uma função "LitarPets" que irá receber como parâmetro o array de pets e um callback. Essa função deve exibir os dados de todos os pets cadastrados.  (aplicar a função ListaDadosPet utilizada como callback)
const listarDadosDoPet = (Array, callback) => {
  for (const pet of Array) {
      callback(pet)
  }
}

listarDadosDoPet(pets, listarDadosPet)
