// setIbnterval

/// resumo setInterval executa a CADA 
/// setITimeout executa após 

// função que exibe o objeto Date
function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12 : false
    });
}
// setInterval executa a função a cada x tempos
// recebe um parametro a ser executado, depois o intervalo de
// execução
const timer = setInterval(function(){
    console.log(mostrarHora());
    // 1000 = 1seg
    // 2000 = 2seg
    /// 3000 = 3seg...
}, 1000);

// setTimeout, ao contrário do setInterval
// ela executa a função após um intervalo
setTimeout(function(){
    clearInterval(timer)
}, 2000);