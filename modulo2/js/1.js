// Funções são First-Class Objects

// Declaração de função(function hoisting)
// posso usar funções antes de declarar ela(portanto que ela exista)
falaOi()

function falaOi(){
    console.log('ola');
};

// Function expression
// a variavel souUmDado recebeu a função e passou a ser uma
const souUmDado = function() {
    console.log('Sou um dado');
};

function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
// gera divergência no uso do this
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// funções dentro de um objeto
// como um método do objeto
const obj = {
    falar(){
        console.log('Falar dentro do obj');
    }
}
obj.falar();