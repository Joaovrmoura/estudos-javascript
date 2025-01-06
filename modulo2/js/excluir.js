function jogo(){
    return{
        
        mover : document.querySelector('.move'),
        alvo : document.querySelector('.acerteMe'),

        iniciar(){
            // this.movimentoMouse(), 
            this.pontuacao()
        },

        randomizar(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min
        },

        pontuacao(){
            let pontos = 0
            document.addEventListener('click', (e) =>{
                let pontos = 0
                pontos++;
                this.movimentoAlvo()
                console.log(pontos);
            });
        },

        movimentoAlvo(){
            setInterval((e) =>{
                // Calcula o limite máximo para `left` e `top`
                const maxX = window.innerWidth - this.alvo.offsetWidth;
                const maxY = window.innerHeight - this.alvo.offsetHeight;
                let randX = this.randomizar(0, maxX);
                let randY = this.randomizar(0, maxY);
                console.log(randX, randY);
                
                this.alvo.style.left = `${randX}px`
                this.alvo.style.top = `${randY}px`
            }, 2000); 
        },

        // movimentoMouse(){
        //     document.addEventListener('click', (e) => {
        //         document.addEventListener('mousemove', (e) =>{
        //             const x = e.clientX;
        //             const y = e.clientY;
        //             this.mover.innerHTML = `posição: X: ${x} Y :${y}`
        //         });
        //     }); 
        // }
    }
}

const start = jogo()
start.iniciar()




