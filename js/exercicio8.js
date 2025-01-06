const timer = document.querySelector('.timer')
const iniciar = document.querySelector('#iniciar');
const parar = document.querySelector('#parar')
const zerar = document.querySelector('#zerar')

function zeroAEsquerda(num){
    return num < 10 ? `0${num}` : num
}

let sec = 0
let min = 0
let hour = 0

const cronometro = (zerar=null) =>{
    if (zerar) {
        return `${zeroAEsquerda(hour=0)}:${zeroAEsquerda(min=0)}:${zeroAEsquerda(sec=0)}`
    }
    if (++sec > 59) {
        sec = 0;
        if (++min > 59) {
            min = 0;
            hour++;
        }
    }
    return `${zeroAEsquerda(hour)}:${zeroAEsquerda(min)}:${zeroAEsquerda(sec)}`
}

function stopInterval(myVar){
    clearInterval(myVar);
}
function trocaCor(red = null){
    if(red) return timer.style.color = 'red';
    timer.style.color = 'black'
}

iniciar.onclick = () => {
    let intervalo = setInterval(function () {
        timer.innerHTML = cronometro();
        trocaCor()
    }, 1000);  

    zerar.onclick = () => {
        timer.innerHTML = cronometro(true);
        trocaCor();
        stopInterval(intervalo)
        return intervalo = false
    };

    parar.onclick = () => {
        trocaCor(true);
        stopInterval(intervalo)
    };
};



