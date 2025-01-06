// Array são listas / coleção de coisas
// posso ter varios tipos dentro de arrays
// porém é uma boa prática adicionar 
//apenas um tipo de dado
const nome = 'joa victor'
const alunos = ['joao', 'maria', 'pedro'];

// posso substituir o valor do array no indice
alunos[0] = 'joaoazao'

//////////////// ADICIONANDO METODOS ////////////////////

// AQUI ADICIONO NO FINAL
// adicionando no final do array "manualmente"
alunos[alunos.length] = 'luiza'
// adicionando no final do array "automaticamente"
alunos.push('fabio')

// ADICIONANDO NO COMEÇO
alunos.unshift('amanda')
alunos.unshift('Gustavo')

/////////// REMOVENDO METODOS ////////////////
// REMOVENDO DO FINAL
let removidos = alunos.pop();

// REMOVENDO DO COMEÇO
let removidos2 = alunos.shift()

// REMOVENDO POR INDICE
// não apaga o indice apenas o valor.
// No lugar do valor fica VAZIO
delete alunos[1]

/// FATIAMENTO DE ARRAYS
console.log(alunos.slice(1))
// se é instancia igual no python
console.log(alunos instanceof Array);

console.log(alunos)
// acessando indice do array
console.log("removidos: final-" + removidos + ' Começo-' + removidos2)
console.log(alunos[0])
console.log(alunos.length)


