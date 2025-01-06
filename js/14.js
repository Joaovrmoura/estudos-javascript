const frutas = ['abacaxi', 'laranja', 'Uva'];
const pessoa = {
    nome : 'joao',
    sobrenome : 'moura',
    endereco : {
        rua : 'almeida',
        numero : 650
    }
}

// For IN precorre os itens do array
for(let indice in frutas){
    console.log(indice);
}

// const nome = 'nome'
// console.log(pessoa[nome]);
// // caso não tenha uma variável o valor não pode ser null
// console.log(pessoa['nome']);

console.log();
// For IN precorre os itens do objeto
for(let chave in pessoa){
    // chave do array, acessando o valor da chave 
    console.log(chave, pessoa[chave]);
}

console.log();
for(let itens in pessoa['endereco']){
    console.log(itens, pessoa['endereco'][itens]);
}

console.log();
// em objetos iteraveis FOR OF
// não é possível utiliar em objetos
// chave : valor
const nome2 = 'joao victor'
for(let valor of nome2){
    // console.log(valor); j o a o v i c t o r
}

const nomeArray = ['claudia', 'rayane', 'isabela']
console.log();

// FOREACH valor indice array completo
// aqui exemplo em array
nomeArray.forEach(function(valor, indice, array){
    console.log(valor, indice);
    console.log(array);
    
})
 
