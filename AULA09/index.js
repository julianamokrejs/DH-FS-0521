// import express from 'express';
const express = require('express')
const app = express();



// Desafio - Criar uma rota parametrizada, que irá se chamar /cumprimentar 
// e terá um parâmetro que será um nome, logo, ele terá que receber esse parâmetro
// que foi informado e exibir uma mensagem de cumprimento "Olá, nome".
app.get('/cumprimentar/:nome', (req, res) => { 
    const nome = req.params.nome
    res.send("Olá, " + nome)
    //console.log(req.params)
})

// Desafio - Criar uma rota parametrizada, que irá se chamar /calcular 
// e terá dois parâmetros que serão números, caso, receba apenas o primeiro parâmetro, 
// deverá retornar ele, ou, caso recebe os dois parâmetros terá que somar os dois e retornar
// o resultado.
//como transformar o parâmetro em número inteiro? 
app.get('/calcular(:numero1/:numero2?', (req, res) => {
    let { numero1, numero2 } = req.params

    if (numero2) {
        let resultado = parseInt(numero1) + parseInt(numero2)
        res.send('O resultado é: ' + resultado)
    } else {
        res.send(numero1)
    }
})


app.listen(3000, () => {
    console.log("Rodando na porta http://localhost:3000")
})
