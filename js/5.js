// funções são blocos de códigos que executam algo
// podem ou não retornar valor

// passei um parametro que deve ser preenchido
function saudacao(nome){
    // console.log('Bom dia ' + nome)
    // valor da função
    return 'Bom dia ' + nome;
}

// funções sem return são undefined/ não tem valor
const variavel = saudacao('luiza')
console.log(variavel)

// posso reutilizar funções
saudacao('Joao');

// passei dois parâmetros para função
function soma(x, y){
    //  funções são protegidas por escopo
    // é impossivel acessar variaveis de fora
    // do lado de dentro da função
    const res = x + y;
    // só executa até aquui
    return res; 
}
// não posso acessar variaveis da função
// do lado de fora dela
// exemplo console.log(res)
console.log(soma(5, 50))

// pre-definindo parametros
// caso não preencha os valores 
// quando chamo a função ele vai utilizar
// os parametros pré-definidos
function soma2(x = 5, y = 20){
    const res = x + y;
    return res; 
}

const resultado = soma2()
// preechendo parâmetro
console.log(soma2(50, 654))
// não preenchendo
console.log(resultado)

///////////// VARIAVEIS QUE RECEBEM FUNÇÔES / FUNÇÂO ANÔNIMA //////

// preciso utilizar ponto e virgula no final
const raiz = function(n){
   return n ** 0.5;
};
console.log(raiz(25))

// arow function Forma mais atual
// funciona da mesma forma que o function simplicficadamente
const raiz2 = (n) =>{
   return n ** 0.5;
};
console.log(raiz2(25))
// Utilizado para uma função menor específica
const raiz3 = (n) => n ** 0.5;
console.log(raiz2(25))