function criaCalculadora(){
    return {
        display : document.querySelector('.display'),

        inicia(){
            // REFRENCIA O METODO 
            this.cliqueBotoes(), 
            this.enterCalculo()     
        }, 

        enterCalculo(){
            document.addEventListener('keypress', (e) =>{
                if(e.keyCode === 13){   
                    e.preventDefault()
                    this.realizaConta();
                }
            });
        },

        cliqueBotoes(){
            // this = calculadora
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.delLast();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        }, 
        
      
        btnParaDisplay(valor){
            this.display.value += valor;
        },
        clearDisplay(){
            this.display.value = ' '
        }, 
        delLast(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            try{
                let conta = this.display.value;
                if(!conta){
                    alert('Nenhum número foi adicionado!')
                    return
                }
                this.display.value = eval(conta)
            }catch(e){
                alert('Expressão inválida');
                this.clearDisplay()
            }
        },
       

    };
}

const calculadora = criaCalculadora();
calculadora.inicia(); 