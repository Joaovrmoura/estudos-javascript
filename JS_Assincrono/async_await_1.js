function rand(min =0 , max=3) {
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

//cadeia
// exeComTempo('fase 1', rand())
//     .then(value =>{
//         console.log(value);
//         return exeComTempo('frase 2', rand())
//     })
//     .then(fase =>{
//         console.log(fase);
//         return exeComTempo('frase 3', rand())
//     }).then(fase=>{
//         console.log(fase);
//     }).catch(e=>{
//         console.log(e);
//     })

// permite que utilize promises dentro do 
// corpo da função como se fosse sincrono
async function execute() {
    try{
        const fase1 = await exeComTempo('fase 1', 3000)
        console.log(fase1);
        
        const fase2 = await exeComTempo('fase 2', 2000)
        console.log(fase2)
    
        const fase3 = await exeComTempo(300, 1000)
        console.log(fase3)
        console.log('terminamos na fase ', fase3);

    }catch(e){
        console.log(e);
    }
}

execute();