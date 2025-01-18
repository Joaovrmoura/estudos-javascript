// Dentro de uma função onde queremos controlar a ordem de execução,
// construímos o método Promise, que recebe dois parâmetros: resolve e reject.
// O resolve sinaliza que a operação foi concluída com sucesso 
// e ativa o método .then, que pode encadear outras Promises.
// O reject sinaliza que ocorreu um erro e passa o controle para o método .catch.

function rand(min, max) {
    min *= 1000; 
    max *= 1000; 
    return Math.floor(Math.random() * (max - min) + min).toFixed(2); 
}

// Precisamos resolver ou rejeitar a Promise para indicar o resultado da operação.
// O construtor da Promise recebe dois parâmetros: resolve e reject,
// sendo uma boa prática nomeá-los dessa forma para clareza.
function exeComTempo(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error());
        setTimeout(() => {
            // O resolve sinaliza que a operação foi concluída e aceita apenas um argumento.
            resolve(msg);
        }, tempo);
    });
}

// Sempre que chamamos o resolve, o método .then será executado.
// O método .then pode encadear outras funções ou Promises e retornar valores.
exeComTempo('sou o 1', rand(1, 2))
    .then(resposta => {
        // Imprime a resposta da segunda Promise
        console.log(resposta);
        // Retorna outra Promise
        return exeComTempo('sou o 2', rand(1, 3)); 
    })
    .then(resposta => {
        console.log(resposta); 
        return exeComTempo(222, rand(1, 2)); 
    })
    .then(resposta => {
        // Este bloco não será executado porque a Promise será rejeitada
        console.log(resposta);
    })
    .catch(e => {
        // Quando chamamos o reject, o fluxo é redirecionado para o catch.
        console.log('Erro capturado no catch:', e);
    });
