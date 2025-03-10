const keyW = document.querySelector('.w')
const keyA = document.querySelector('.a')
const keyD = document.querySelector('.d')
const keyS = document.querySelector('.s')
const snake =document.querySelector('.snake')

snake.style.bottom = '0px'   

function moveSnake(direction, offset, startPosistion){

snake.animate(
    [
        // keyframes
        { transform: `translate${direction}(${startPosistion}px)` },
        { transform: `translate${direction}(${offset}px)` },
    ],
    {
        // timing options
        duration: 5500,
        easing: 'linear',
        iterations: Infinity,
    },
);
}


keyW.style.transition = 'ease-out'
// Estado do movimento
let currentDirection = null;
let posX = 0;
let posY = 0;
const moveStep = 10;




// function translateSnake(direction, eixo){
//     snake.animate(
//         [
//             // keyframes
//             { transform: `translate${direction}(0px)` },
//             { transform: `translate${direction}(${eixo == '-'? '400px' : '-400px'})` },
//         ],
//         {
//             // timing options
//             duration: 5000,
//             iterations: Infinity,
//         },
//     );

// }

document.addEventListener('keyup', (e) => {
    if(e.key == 'w'){
        keyW.style.transform = 'translateX(-4px)'
    }
    if(e.key == 's'){
        keyS.style.transform = 'translateX(-4px)'
    }
    if(e.key == 'a'){
        keyA.style.transform = 'translateX(-4px)'
    }
    if(e.key == 'd'){
        keyD.style.transform = 'translateX(-4px)'
    }
})


const loop = () => {
    let move = 10
    let start = null
    let posisitionStart = ''
    setInterval(() => {

        let rect = snake.getBoundingClientRect();
        console.log(rect.x);
        console.log(rect.y);

        document.addEventListener('keydown', (e) => {
            if(['w','a','s','d'].includes(e.key)) {
                
                // Calcular nova posição
                if(start === null){
                    posisitionStart = '-700'
                    start = true
                }else{
                    posisitionStart = rect.y
                }
                console.log(posisitionStart);

                switch(e.key) {
                 
                    
                    case 'w': moveSnake('Y', posisitionStart, rect.y); break;
                    case 's': moveSnake('Y', '700',rect.y); break;
                    case 'a': moveSnake('X', '-700', rect.x); break;
                    case 'd': moveSnake('X', '700', rect.x); break;
                

                    // case 'w': posY -= moveStep; break;
                    // case 's': posY += moveStep; break;
                    // case 'a': posX -= moveStep; break;
                    // case 'd': posX += moveStep; break;
                }
        
                // // Aplicar animação suave
                // animation = snake.animate([
                //     { transform: `translate(${posX}px, ${posY}px)` }
                // ], {
                //     duration: 200,
                //     easing: 'ease-out',
                //     fill: 'forwards'
                // });
            }
        });
        

       
    },10)
}

loop()