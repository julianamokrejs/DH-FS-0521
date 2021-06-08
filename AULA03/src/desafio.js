//desafio: obter a quantidade de dias 
//que temos de diferença entre as datas
//15/05/2020 - 15/05/2021
//usando moment e date-fns

//MOMENT
var moment = require('moment'); // require
moment().format("dd-mm-yyyy"); 

let dataInicial = moment([08-06-2021]);
let dataFinal = moment([08-09-2021]);
let qtdeDias = dataFinal.diff(dataInicial, 'days');

//console.log(qtdeDias);
//(zuado)


//DATE-FNS
const { differenceInDays, differenceInMonths } = require('date-fns')

let dataInicialFns = new Date(2021, 05, 19, )
let dataFinalFns = new Date(2021, 09, 08)
let qtdeDiasFns = differenceInDays(dataFinalFns, dataInicialFns);
let qtdMesesFns = differenceInMonths(dataFinalFns, dataInicialFns)

console.log(qtdeDiasFns + " dias ou " + qtdMesesFns + " meses");
//(show)