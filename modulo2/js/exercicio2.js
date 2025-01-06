
function Calculadora(){

    this.display = document.querySelector('.display')
    this.start = () =>{ 
        this.captureButton()
        this.capturarEnter()
    }
    this.capturarEnter = () => {
       document.addEventListener('keydown', event =>{
            event.preventDefault()
            if(event.code == 'Enter') this.calculo()
       });
    }

    this.captureButton = () =>{
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addDisplayNum(el.value)
            if(el.classList.contains('btn-eq')) this.calculo()
            if(el.classList.contains('btn-clear')) this.clearDisplay()
            if(el.classList.contains('btn-del')) this.delLast()
        });
    }
    this.getDisplay = () => { return this.display }
    this.clearDisplay = () =>{ this.display.value = ''}
    this.delLast = () =>{ this.display.value = this.display.value.slice(0, -1) }
    this.addDisplayNum = (valor) => { this.display.value += valor }

    this.calculo = () =>{
        try{
            const conta = Function(`return ${this.display.value}`)()
            if(!conta && conta !== 0){
                alert('Deu merda')
                return
            }
            this.display.value = conta
            
        }catch(e){
            alert('Deu mais merda ainda')
        }
    }
}
const calculadora = new Calculadora()
calculadora.start()