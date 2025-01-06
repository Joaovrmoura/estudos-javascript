// quando definimos funções com 
// function ()
// nóes temos automaticamente (arguments) 
// no parâmentro mesmo que não dê para ver
// gaurdam todos argumentos passados
// na chamada da função

function funcao(){
    console.log('oa');
}
// não buga -\ - _ - /- pq é recebido em arguments
funcao('valor')


// arguments = *args o python
function funcao2(a, b, c){
    let total = 0
    for(let argumento of arguments){
        total += argumento
    }
    console.log(total, a, b, c);
}
// isso não funciona em arrow functions
funcao2(1, 2, 32)


// argumentos que sustenta todos os argumentos
// desestruturação recebe os valores da chave de um objeto no parâmetro
function funcao3({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
    
}
// passo a chave e o valor no parâmetro da função
funcao3({nome : 'joao', sobrenome : 'moura', idade : 25})

// desestruturação em arrays recebe os de um array aqui com 3 posições
// aonde cada item do array representa uma argumento 
function funcao4([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}

// passo o valor dos itens do array no parâmetro da função
funcao4(['jaoo', 'rodrigues', 55])


// rest - ...variavel recebe todos os valores não atribuidos 
// a parâmetros SEMPRE DEVE SER O ÚLTIMO VALOR!!
const conta = function(operador, acumulador, ...numeros){
    let cont = 0;
    for(let numero of numeros){
        cont++;
        if(operador == '+') acumulador += numero;
        if(operador == '-') acumulador -= numero;
        if(operador == '/') acumulador /= numero;
        if(operador == '*') acumulador *= numero;
    }
    console.log(acumulador);
};
// passo o valor dos itens do array no parâmetro da função
conta('*', 1, 55, 5, 10)

// mesmo utilizandoo o rest ainda temos arguments
// NÂO PODEMOS UTILIZAR COM ARROW FUNCIONS () => {}
const conta2 = function(operador, acumulador, ...numeros){
    console.log(arguments);
    console.log(operador, acumulador, ...numeros);
};

conta2('*', 1, 55, 5, 10)

