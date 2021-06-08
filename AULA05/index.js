//criar array de objetos com os pets
let pets = [
    {
        nome: "Cegali",
        idade: 11,
        nomeTutor: "Juliana",
        especie: "gato",
        sexo: "fêmea",
        raca: "SRD",
        pelagem: "tigrada",
        vacinado: true
    },
    {
        nome: "Dimmu",
        idade: 1,
        nomeTutor: "Juliana",
        especie: "gato",
        sexo: "macho",
        raca: "SRD",
        pelagem: "preta",
        vacinado: true
    },
    {
        nome: "Nina",
        idade: 15,
        nomeTutor: "Juliana",
        especie: "cachorro",
        sexo: "fêmea",
        raca: "Border Collie",
        pelagem: "preta e branca",
        vacinado: true
    },
    {
        nome: "Dolly",
        idade: 13,
        nomeTutor: "Juliana",
        especie: "cachorro",
        sexo: "fêmea",
        raca: "SRD",
        pelagem: "marrom e branca",
        vacinado: true
    }
]

//criar função que retorne os nomes dos pets
const listarPets = () => {
    for(let i = 0; i < pets.length; i++)
    console.log(pets);
}

//...ou...
// const listarPets2 = () => {
//     pets.forEach(pet => { //pet = parâmetro (os elementos dentro do objeto PETS são referenciados como PET)
//         console.log("nome: " + pet.nome);
//     })
// }
//listarPets2();


//criar função que valida se o objeto passado para a função possui as propriedades necessárias (retorna true ou false) e aplicar validação na função cadastrarPet()
const validarDados = (novoPet) => {
    if (typeof novoPet == "object") {
        return (
            novoPet.nome && 
            novoPet.idade && 
            novoPet.nomeTutor && 
            novoPet.especie && 
            novoPet.sexo && 
            novoPet.raca && 
            novoPet.pelagem && 
            novoPet.vacinado
        )
    } else {
        return false
        console.log("faltou coisa")
    }
}

//criar função para cadastrar pets
//validar se o segundo parâmetro passado na função de cadastrar pet é de fato um objeto
const cadastrarPet = (arrayPets, novoPet) => {
    if (typeof novoPet == "object") {
        if (validarDados(novoPet)){
        console.log(pets); 
        arrayPets.push(novoPet);
        } else {
            console.log("inserir todas as propriedades necessárias")
        }
    } else {
        console.log("inserir objeto válido")
    }
}

//criando novo objeto pet para ser adicionado na lista de pets
let novoPet = {
    nome: "Chapisco",
    idade: 3,
    nomeTutor: "Juliana",
    especie: "cachorro",
    sexo: "macho",
    raca: "SRD",
    pelagem: "caramelo",
    vacinado: true
}

cadastrarPet(pets, novoPet); //bota o novo objeto na lista
listarPets(); //lista os pets com o novo adicionado
