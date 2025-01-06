// importando o módulo inteiro de outro script
// const mod1 = require('./mod1')

//importando apenas uma chave
// const falaNome = require('./mod1').falaNome;

// importando tudo e atribuindo uma chave específica a uma variável
// const mod1 = require('./mod1')
// const falaNome = mod1.falaNome


// importando via atribuição e desestruturação
// const {nome, sobrenome, falaNome} = require('./mod1')
// console.log(nome);
// console.log(falaNome());

// importando um objeto do mod1
const {Pessoa} = require('./mod1')
const p1 = new Pessoa('joao')
console.log(p1.nome);