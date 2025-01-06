// reduce, reduz o temanho do array
// necessário ter um retorno
const numbers = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27]

// soma todos os valores Par do array
const total = numbers.reduce(function(acumulador, valor, indice, array){
    valor = Number(valor)
    if(valor %2 == 0) acumulador += valor;
    return acumulador
}, 0 /* valor inicial do acumulador OU TIPO */);


// retorne uma lista com os valores Par (igual ao filter)
const totalPar = numbers.reduce(function(acumulador, valor, indice, array){
    valor = Number(valor)
    if(valor %2 == 0) acumulador.push(valor);
    return acumulador
}, [])


// retorne um array com o dobro dos valores (igual ao map)
const dobroValor = numbers.reduce(function(acumulador, valor, indice, array){
    valor = Number(valor)
    acumulador.push(valor * 2)
    return acumulador
}, [])



const people = [
    { name: 'luana', age: 61 },
    { name: 'lorrane', age: 24 },
    { name: 'juliana', age: 32 },
    { name: 'fernanda', age: 12 },
    { name: 'luciane', age: 23 },
]

// retorne a pessoa mais velha
let ag = 0
let newObj;
//                                    CALLBACK    º1valor   º2valor  na ordem
const peopleOlder = people.reduce(function(acumulador, valor){
    if(acumulador.age > valor.age) return acumulador
    return valor
}, 0)
console.log(peopleOlder);
