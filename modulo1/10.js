// Object date
// Marco zero "ACHO QUE" da criaão de date em sistema unix
const tresHoras = 60 * 60 * 3 * 1000;
// Um dia após
const umDia = 60 * 60 * 24 * 1000;
// è uma função construtora 
// Cria um objeto
const data = new Date(0 + tresHoras + umDia);
// console.log(data.toString());

// valores dentro do objeto date
// date(ano, mes, dia, hora, min, seg, ms) 
const dataAtual = new Date();
console.log(dataAtual.toString());

// Outra forma de acessar data com o dateString 
// fomrmato
console.log();
const datastring = new Date('2024-11-24 01:33:59');
// Pegando cada informação do objeto date
console.log('dia', datastring.getDate());
console.log('Mês', datastring.getMonth() + 1);
console.log('ano', datastring.getFullYear());
console.log('Hora', datastring.getHours());
console.log('Min', datastring.getMinutes());
console.log('seg', datastring.getSeconds());
// 0 = Domingo
console.log('dia Da semana', datastring.getDay());
// Pegando todos os milésimos de segundos até hoje
console.log(Date.now());
console.log(datastring.toString());



// Pegando as datas com os milésimos de segundos até hj
const datams = new Date(1732423452385);
console.log('dia', datams.getDate());
console.log('Mês', datams.getMonth() + 1);
console.log('ano', datams.getFullYear());
console.log('Hora', datams.getHours());
console.log('Min', datams.getMinutes());
console.log('seg', datams.getSeconds());
console.log('dia Da semana', datams.getDay());
console.log(datams.toString());


function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function FormataData(data) {
    const dia =  zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano =  zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} - ${hora}:${min};${seg}`;
}

const dataFunc = new Date();
const dataBrasil = FormataData(dataFunc);
console.log(dataBrasil);
