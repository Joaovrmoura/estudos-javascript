/*
tipos primitovos em js (imutáveis) - string, number, Boolean, undefined
null (biginit, symbol) - valores Copiados
*/

let a = 'A';
let b = a;
console.log(b);

// Referência (mutável) - array, object, function
let ar = [1, 2, 3];
// em tipos muáveis os valores são copiados para outra variável
// e podem ser alterados. São valores passados por refencia
// VARIAVEL = VARIAVEL -OS DOIS VALORES APONTAM PARA 
// O MESMO LUGAR DA MEMÒRIA
let br = ar;
let clonado = [...ar]
console.log(ar, br);

ar.push(4);
console.log(ar);

br.pop();
console.log(br);

clonado.push('joao')
console.log(clonado);

// O mesmo serve para objetos

const objA = {
    nome : 'joao',
    sobrenome : 'rodrigues'
}
//Apontam para o mesmo lugar da memória
let objB = objA
objA.nome = "Mariana"
console.log(objB)
// {...var} - Para apontar para outro endereco na memoria
let objC = {...objA}
objA.nome = "Reinaldo";
// Não altera a objA
console.log(objC);

