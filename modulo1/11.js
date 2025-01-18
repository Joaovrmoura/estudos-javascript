// let tem escopo de bloco { } DEFERENTE
// do var que só tem escopo em função
const verdade = 'verdade';

// var pode ser reedeclarado
var nomeVar = 'joao'
var nomeVar = 'maria'
console.log(nomeVar)

// posso acessar variaveis for da função, mas não o contrário
function falaOi(){
    var sobrenome = 'rodrigues';
    if(verdade){
        let nome = 'joao';
        console.log(nome, sobrenome)
    }
    //  erro de nome is not defined
    // pois nome está definido no bloc if{}
    // console.log(nome, sobrenome)
}
falaOi();

console.log();
let a = 'A'
let b = 'B'
let c = 'C'

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c)
console.log();


/////////////////////////////// ATRIBUIÇÂO VIA DESTRUTURAÇÂO /////////////////////////////////

            //   0 1  2 3 4  5 6 7 8
const numeros = [12,234,35,4,51,326,72,8,9111];
// aqui as variaveis primeiroNum e segundoNum]
// são atribuidas aos valores do vetor em suas respectivas
// posições
const [primeiroNum, segundoNum, ...resto] = numeros
// resto = restante do array não atribuido, 
// que vira um novo array
console.log(primeiroNum, segundoNum);
console.log("AQUI O RESTO", resto);

const numeros2 = [1000,2000,3000,4000,5000,6000,7000,8000,9000];
// pulando vetores e atribuindo as variaveis
// aos vetores na posição que eu quero
const [um, ,tres, , , ,sete] = numeros2;

console.log(um, tres, sete);

const numeros3 = [[1 , 2, 3], [4, 5, 6], [7, 8, 9]];
const [arra1, arra2] = numeros3

console.log(arra1);
// acessando o indice de um array dentro do outro array
console.log(numeros3[1][2]);


