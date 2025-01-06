//filter map and reduce
const numbers = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27]

// 1 - retorne a soma do dobro de todos os pares
const totalPar = numbers.filter(valor => valor %2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) =>{
    acumulador += valor
    return acumulador
})

console.log(totalPar);
