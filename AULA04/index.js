let nome = 'Juliana';
let idade = 33;
let eMaiorDeIdade = true;

if (idade >= 18) {
    console.log(nome + ', ' + idade + " anos, " + "maior de idade.")
} else if (idade < 18) {
    console.log(nome + ', ' + idade + "anos," + "fedelho(a).")
}

//criação de objeto
let pessoa = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade
}
console.log(pessoa.nome);

//atribuição simplificada
let outraPessoa = {
    nome,
    idade,
    eMaiorDeIdade,
}
console.log(pessoa.idade)
;
//arrays
let animais = ['cachorro', 'gato', 'pangolin', 'dragão de komodo']

//operadores aritméticos e lógicos
let num1 = 10;
let num2 = 5;
let soma = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log('soma: ' + soma + '; subtração: ' + sub + '; ' + 'multiplicação: ' + mult + '; ' + 'divisão: ' + div + '.');

if (num1 > num2) {
    console.log(num1 + ' é maior que ' + num2)
} else if (num1 < num2) {
    console.log(num2 + ' é maior que ' + num1)
}