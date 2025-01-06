const numbers = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27]

// for each só itera sobre valores
const ar1 = numbers.forEach((number, indice) =>{
    console.log(number);
})
//soma 
let soma = 0;

const ar2 = numbers.forEach(number => soma += number)
console.log(soma);
