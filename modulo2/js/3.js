function msg(texto){
    function aplica(frase){
        return texto + ' ' + frase
    }
    return aplica
}

const menssagem = msg('amor')
const aplica = menssagem('é sentimento')
console.log(aplica);

//clousures em js são funções que os parâmetros são 
// definidos na execução ou chamada da função
function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('mariana');
console.dir(funcao);


function randomizar(){
    const numero = Math.random() * (3000 - 1000) + 1000;
    return Math.floor(numero)
}

// CALLBACK EM FUNÇÕES COLOCA ORDEM NA EXECUÇAO DE FUNÇÔES
// AS FUNÇÔES QUE PRECISAM SER EXECUTADAS NA OREDEM
// RECEBEM CALLBACK NO PARÂMETRO E ASSIM QUANDO PRECISAMRMOS
// DE ORDEM DE EXECUÇÂO CHAMAMOS UMA DENTRO DA OUTRA 
// COM ANONYMOUS FUNCTION

function f1(CALLBACK){
    setTimeout(function(){
        console.log('f1');
        if(CALLBACK) CALLBACK();
    }, randomizar());
}

function f2(CALLBACK){
    setTimeout(function(){
        console.log('f2');
        if(CALLBACK) CALLBACK();
    }, randomizar());
}
function f3(CALLBACK){
    setTimeout(function(){
        console.log('f3');
        if(CALLBACK) CALLBACK();
    },randomizar());
}
// PRIMEIRO MÈTODO DE CALLBACK MAIS CONFUSO
f1(function(){
    f2(function(){
        f3(function(){
            console.log('ola mundo');
        });
    });
});


// ISSO È A MESMA COISA QUE A ACIMA 
f1(f1CALLBACK);

function f1CALLBACK(){
    f2(f2CALLBACK);
}
function f2CALLBACK(){
    f3(f3CALLBACK);
}
function f3CALLBACK(){
    console.log('OLA MUNDO2');
}