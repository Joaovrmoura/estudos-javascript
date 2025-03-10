const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    },500)
}

const loop = setInterval(() => {
    //pega o deslocamento do pipe
    const pipePosition = pipe.offsetLeft
    // captura a animação do mario baseado no estilo bottom
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log(marioPosition);
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 95){

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        
        mario.style.marginLeft = '50px'
        mario.style.width = '80px'
        mario.src = "./assets/game-over (1).png"
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        clearInterval(loop)
    }
  
    console.log(pipePosition);
    
}, 10)  

console.log(loop)
document.addEventListener('keydown', jump)