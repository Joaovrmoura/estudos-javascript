// array literal
const arr = ['joao', 'maria', 'jonathan', 'ponciano']
arr[0] = 'mariana'
console.log(arr);
// remove elemento do array sem alterar os indices
delete arr[0]
// shift deleta o array e move e os indices(remove o primeiro elemento)
arr.shift()
// push adiciona no final do array um elemento
arr.push('joao')
// unshift adiciona no primeiro indice
arr.unshift('lorran')
console.log(arr);

// Criando um array com um construtor de array
const arr2 = Array('rodriga', 'mariza', 'alan')
console.log(arr2[2]);

// const arr2Novo = arr2 : valores por refência, 
// atribui os valores do array a outro
// porém, ambos estão apontando para os mesmos valores
// então tudo que fazemos(adicionamos ou deletamos) 
// reflete nas duas variaveis
// para resolver isso utilizamos o spred(tres pontinhos) 

// aqui copiamos os valores do primeiro array para esse
const arr2Novo = [...arr2]
console.log(arr2Novo);

console.log();
// SLICE para fatiar um array, recebe slice
// (indice correspondente ao valor que desejamos primeiro, um valor acima do que queremos)
//                 0           1          2         3
const arr3 = ['cleyton', 'cida', 'rayanne', 'isa']
//quero cida e rayanne, indice cida ate o indice rayanne(2) + 1
const sliceNomes = arr3.slice(1, 3)
console.log(sliceNomes);

console.log();
// split separa os elementos e cria um array para com
// os elementos separados
const nome = 'joao victor ventura silva   '
// trim() remove espaços no final de strings
console.log(nome.trim().split(' '));

const nomes = [ 'joao', 'victor', 'ventura', 'silva' ]
// fazer um array ser uma string novamente
const nome2 = nomes.join(' ') // (',')
console.log(nome2);
