// let = Variável mutável do js.
// Porém só pode ser incializado uma vez
// Posso criar uma variável sem 
// inicializa-lá = Undefined
let nome = "joao";
// Var = Antigo não é mais utilizado 
// NÃO USE VAR
var nome2 = valeria = "mariana";
// Utilize sempre CamelCase por 
// Convenção em js 
let nomeCliente = 'claudia'
// formas de concatenação
// Template string
console.log(`Olá ${nome}`)
console.log("Olá" + nome2)
console.log("Olá cliente", nomeCliente)

nome = "joão2";
console.log(`Olá ${nome}`)

console.log('\n');

//Constantes precisam ser criadas
// e imediatamente inicializadas
// não podem ser alteradas/modificadas
const sobrenome = "moreira"
// tentei alterar e deu erro!
// sobrenome = "laiz"
console.log(`Olá ${sobrenome}`)
// Tipo de variáveis
console.log(typeof sobrenome)


// exercicio calculo de imc
const nome_imc = "joao"
const idade = 24
const altura = 1.80;
const peso = 84;
let imc = peso / (altura * altura)

console.log(`${nome_imc} tem ${idade} anos
pesa ${peso} tem ${altura} e seu imc é de ${imc}`)


// Variavel undefined x null
// null desconfigurar uma variável
// undefined inicializar em uma condiçao
// ou trecho específico

const v = true;
const f = false;
const existe = null;
let setar;

// Confirmar se é um numero inteiro
// e transformar em num 

const num = '5'
console.log(typeof num)
let check = parseInt(num)
console.log(typeof check)
let num2 = '5.8'
check = parseFloat(num2)
console.log(check)
const num3 = '10.9'
let ehNumero = Number(num3)
console.log(typeof ehNumero)