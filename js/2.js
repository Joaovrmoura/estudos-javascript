// Alert, confirme, prompt
let anos;

let ehAdulto = window.confirm('Tu é de maior?');

// Input para usuário SEMPRE RETORNA TIPO STRING
let num1 = window.prompt('Digite um numero');
let num2 = window.prompt('Digite outro numero');

num1 = Number(num1)
num2 = Number(num2)
const soma = num1 + num2

// alert(soma)
if(ehAdulto){
    alert('Olá mundo, você é adulto')
}else{
    // alert('Tu é de menor!')
}

// Exericicio troque os valores de lugar
// variavel - valor depois de trocar

let a = 'a' // b
let b = 'b' // c
let c = 'c' // a

let troca;
troca = a
a = b
b = c
c = troca

console.log(a + b + c)

//Como no python posso acessar 
// caracters por indices em strings
// var[indice]
let umaString = 'Sou uma string'

//Também temos métodos de string .nomeMétodo
// conta numero de caracters
console.log(umaString.length)
// pega o caracter na posição do numero passado
console.log(umaString.charAt(13))
// retorna um indice, que aparece 
// pela primeira vez começando do final, 
//o segundo valor do parametro é o 
//ponto de inicio
console.log(umaString.lastIndexOf('uma', 3))
// pela primeira vez a palavra ou letra
console.log(umaString.indexOf('uma'))
// Replace é igual ao indexOf, porém troca a palavra
console.log(umaString.replace('uma', 'outra'))
// Fatiamento de Strings -indice começa do final corta a string
// no numero passado no parametro, o segundo parametro
// fatia a string fatiada
console.log(umaString.slice(-6, -1))
//inicio do fatiamento , final do fatiamento
console.log(umaString.slice(0, 4))
// Cria uma array separando a string sempre que encontra um caracter
// passado no parametro do método
console.log(umaString.split(' '))