const relogio = document.querySelector('.relogio')
let timer;
let seconds = 0

function clock(){
    function initClock(){
        timer = setInterval(function() {
            seconds++;
            relogio.innerHTML = getTimeForSeconds(seconds)
        }, 1000)
    }
    
    function getTimeForSeconds(sec){
        const data = new Date(sec * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12 : false, 
            timeZone : 'GMT'
        });
    }

    // criar envento de forma dinâmica
    // target retorna a tag elemento sendo clicados no html
    document.addEventListener('click', function(e){
        const el = e.target;
        console.log(el);
        
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer)
            initClock();
    
        }else if(el.classList.contains('zerar')){
            relogio.classList.remove('pausado')
            console.log('clicou em zerar');
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            seconds = 0;
    
        }else if(el.classList.contains('pausar')){
            clearInterval(timer)
            relogio.classList.add('pausado')
        }
        
    });
}

clock();
