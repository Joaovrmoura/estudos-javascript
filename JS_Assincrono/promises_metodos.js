// Promise.all, Promise.race, Promise.reject, Promise.resolve

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min).toFixed(0)
}

function exeComTempo(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('erro nas promises') 
            return
        };
        setTimeout(() => {
            resolve(`${msg} Concluída após ${time}`); 
        }, time);
    });
}

// Array com Promises e valores estáticos
// As strings são retornadas imediatamente, enquanto as Promises demoram conforme o tempo passado
const promises = [
    exeComTempo('promise 1', rand(3, 6)),
    exeComTempo('promise 2', rand(2, 4)),
    exeComTempo('promise 3', rand(1, 3)),
];

// ==============================

// Promise.all espera todas as Promises do array serem resolvidas
// Retorna um array com os resultados das Promises, se todas forem resolvidas com sucesso
Promise.all(promises).then(valor => {
    console.log(valor); 
}).catch(e => {
    // Se qualquer Promise falhar, cai aqui
    console.log(e); 
});

// ==============================

// Promise.race retorna a primeira Promise que for resolvida ou rejeitada
// Não pode misturar com strings, apenas Promises são aceitas
Promise.race(promises).then(valor => {
    console.log(valor);
}).catch(e => {
    console.log(e); 
});

// ==============================

// A Promise será rejeitada ou resolvida dependendo de um valor
// Se "emCache" for true, resolve a Promise com o valor "Página já em cache"
function baixaPagina() {
    const emCache = false; 
    // Se a página estiver no cache, resolve a Promise imediatamente
    if (emCache) return Promise.resolve('Página já em cache')
    // Caso contrário, executa o processo e resolve a Promise após 3 segundos
    return exeComTempo('Baixei a página', 3000)
}

baixaPagina()
    .then(dadospagina => {
        console.log(dadospagina); 
    }).catch(e => {
        console.log(e);
    })
