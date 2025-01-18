let num1 = 1;
let num2 = 2.5;
let num3 = 10.4951881553274;
let conta = num1 * 'ola'
// toString convert num para str
console.log(num1.toString() + num2);
// Formata o numero para 2 casas decimais
console.log(num3.toFixed(2)); 
// Saber se o numero é do tipo int retorn true/false
console.log(Number.isInteger(num1))
// se não for num retorna true
console.log(Number.isNaN(conta))

// Em operações com soma de numeros próximos a 1
// pode dar erro pois o js retorna o numero como não inteiro
// Para contornar essa situação utilizamos o Number
let num_s = 0.6
let nums_s2 = 0.1

nums_s2 = Number(nums_s2.toFixed(2))
console.log(nums_s2)
// aqui retornou que não é inteiro
console.log(Number.isInteger(nums_s2))


///////////////////////////////////////////////////////////


// Objeto MAth

let num11 = 9.54578;
// Arredonda o numero para baixo
let num22 = Math.floor(num1);
console.log(num22)
// Aredonda o numero para Cima
num22 = Math.ceil(num1);
console.log(num22)
// Arredonda se o numero estiver acima de 5 ou abaixo
num22 = Math.round(num11)
console.log(num22)
// retorna o maior numero da sequencia
console.log(Math.max(1,2,3,4,5,6,7,8, -50, 100))
// retorna o menor numero
console.log(Math.min(1,2,3,4,5,6,7,8, -50, 100))
// Retorna um número aleatório entre 10 e 5
const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio)
// Random retorna um numero aleatório
console.log(Math.random())

// Raiz quadrada de um número
let num33 = 9
console.log(num33 ** (1/2))
num33 = 25
console.log(num33 ** 0.5)


//Exercicio
const numero = Number(prompt('Digite um número'))
let show = document.getElementById('numero');
show.innerHTML += `<strong> Seu Numero é ${numero} </strong><br/>`
document.body.innerHTML += `A raiz quadrada é: ${Math.sqrt(numero)}<br/>`
document.body.innerHTML += `O numero ${numero} é inteiro? : ${Number.isInteger(numero)}<br/>`
document.body.innerHTML += `É Nan: ${isNaN(numero)}<br/>`
document.body.innerHTML += `Arredondado para Cima: ${Math.ceil(numero)}<br/>`
document.body.innerHTML += `Arredondado para Baixo: ${Math.floor(numero)}<br/>`
document.body.innerHTML += `Duas casas decimais: ${numero.toFixed(2)}<br/>`