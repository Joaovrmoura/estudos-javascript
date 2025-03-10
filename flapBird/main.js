function randSizeX(min, max){
        return Math.floor(Math.random() * (min - max) + max).toFixed(1)
    }
    let moveRight = 0
    
    document.addEventListener('click', e => {
       
})



const pipeTop = document.getElementById('pipeTop')
const pipeBottom = document.getElementById('pipeBottom')
const bird = document.getElementById('bird')  

const MAX_HEIGHT = 350
let jump = 100

document.addEventListener('keypress', (e) => {
     bird.style.transition = 'ease'
    
    if(jump <= MAX_HEIGHT){
        setTimeout(() => {
          jump = 0
        },300)
        bird.style.transform = `translateY(-${jump}px)`
       p
    }else{
        bird.style.transform = `translateY(-${jump}px)`
    }
  

    setTimeout(() => {
       bird.style.transform = 'translateY(100px)'
    },400)
    
    // pipeBottom.classList.add('animationBottom')
    // pipeTop.classList.add('animationTop')

    loop()
})


const loop = () => {

    setInterval(() => {

        const pipeTopPosition = pipeTop.getBoundingClientRect()
        const pipeBottomPosition = pipeBottom.getBoundingClientRect()
        const birdPosition = bird.getBoundingClientRect()

        if(pipeTopPosition.x < 275){
            pipeTop.classList.remove('animationTop')
            pipeBottom.classList.remove('animationBottom')
            
            pipeTop.style.left = `${pipeTopPosition.x}px`
            pipeBottom.style.left = `${pipeBottomPosition.x}px`
           
        }

    },10)
}

// function randPipes(position, moveRight){

//     const pipElement = document.createElement('img')
//     pipElement.src = "./sprites/pipe-green.png"
    
//     pipElement.style.position = 'absolute'

//     position == 'top' ?  pipElement.style.top = '-5px' : pipElement.style.bottom = '-5px'
//     position == 'top' ? pipElement.style.rotate = '180deg' : pipElement.style.rotate = '0deg'

//     pipElement.style.width = '200px'
//     pipElement.style.height = `${randSizeX(100, 750)}px`
//     pipElement.style.right = `-${moveRight}px`
    
//     pipElement.animate(
//         [
//             // keyframes
//             { transform: "translateX(0px)" },
//             { transform: `translateX(${position == 'top' ? '2000px' : '-2000px'})`},
//         ],
//         {
//         // timing options
//         duration: 2000,
//         iterations: Infinity,
//         },
//     );

//     document.body.appendChild(pipElement)
//     console.log(pipElement);
    
// }
// randPipes('top', moveRight)
// randPipes('bottom', moveRight)
    