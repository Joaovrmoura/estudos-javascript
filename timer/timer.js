const elements = {
    btnStop : document.getElementById('btnStop'),
    btnStart : document.getElementById('btnStart'),
    btnRestart : document.getElementById('btnRestart'),
    btnScreen : document.getElementById('btnScreen'),
    btnEdit : document.getElementById('btnEdit'),
    
    bntConfirme : document.getElementById('confirme'),
    btnCancel : document.getElementById('cancel'),

    inputs: {
        inputMinutes : document.getElementById('minutes'),
        inputHours : document.getElementById('hours'),
        inputSeconds : document.getElementById('seconds'),
    }
}

const timerState = {
    isRun : true,
    intervalElement: null,
    savedTimer : { seconds : 0, minutes  : 0,  hours : 0 },
    setTimer : { seconds : 0, minutes : 0, hours : 0 }
}

// Formatação de números
const formatTimer = (num) => String(num).padStart(2, '0');

const validate = (validate) => validate >= 0 && validate <= 60;
const isZero = (h, m, s) => h == 0 && m == 0 && s == 0;

const inputsChaganges = (state) => {
    Object.values(elements.inputs).forEach(button => {
        button.disabled = state
    })
}

const validateTimer = () => {
    h = Number(elements.inputs.inputHours.value)
    m = Number(elements.inputs.inputMinutes.value)
    s = Number(elements.inputs.inputSeconds.value)
    
    if(![h, m, s].every(validate) || isZero(h, m, s)){
        alert('Formato de hora incorreto')
        return false
    }
    return true
}

const displayTimer = () =>{
    const {h, m, s} = timerState.setTimer
    elements.inputs.inputSeconds.value = formatTimer(s)
    elements.inputs.inputMinutes.value = formatTimer(m)
    elements.inputs.inputHours.value = formatTimer(h)
}

const decrementTimer = () => {
    if(s > 0){
        s--
    }
    else if(m > 0){
        s = 59
        m--
    }
    else if(h > 0){
        s = 59
        m = 59
        h--
    }else{
        stopTimer()
        return;
    }
    
    timerState.setTimer = {s, m, h}
    displayTimer()
}

const startTimer = () => {

    if(!validateTimer()) return

    inputsChaganges(true)

    timerState.setTimer = {
        seconds : Number(elements.inputs.inputSeconds.value),
        minutes : Number(elements.inputs.inputMinutes.value),
        hours : Number(elements.inputs.inputHours.value),
    }
    
    timerState.isRun = true
    elements.btnStart.classList.add('hidden')
    elements.btnStop.classList.remove('hidden')
    elements.btnEdit.classList.remove('hidden')

    timerState.intervalElement = setInterval(decrementTimer, 1000)
}

const stopTimer = () => {
    elements.btnRestart.classList.remove('hidden')
    elements.btnStop.classList.add('hidden')
    timerState.isRun = false
    clearInterval(timerState.intervalElement)
    
}

const restartTimer = () => {
    if(timerState.isRun == false){
        elements.btnRestart.classList.add('hidden')
        elements.btnStop.classList.remove('hidden')
        timerState.isRun = true
        startTimer()
    }
}

const changeElements = () => {
    elements.btnScreen.classList.remove('hidden')
    elements.btnRestart.classList.remove('hidden')
    elements.btnEdit.classList.remove('hidden')
    elements.btnScreen.classList.remove('hidden')

    elements.btnCancel.classList.add('hidden')
    elements.bntConfirme.classList.add('hidden')
}


elements.btnEdit.onclick = () => {
    timerState.savedTimer = {...timerState.setTimer}

    inputsChaganges(false)

    elements.inputs.inputMinutes.focus()

    elements.btnCancel.classList.remove('hidden')
    elements.bntConfirme.classList.remove('hidden')

    elements.btnScreen.classList.add('hidden')
    elements.btnRestart.classList.add('hidden')
    elements.btnStop.classList.add('hidden')
    elements.btnEdit.classList.add('hidden')

    timerState.isRun = false
    clearInterval(timerState.intervalElement)
}

elements.btnCancel.onclick =()=> {
    timerState.setTimer = {...timerState.savedTimer }
    displayTimer()
    stopTimer()
    changeElements()
    
}


elements.bntConfirme.onclick = () => {
    if(validateTimer()){
        changeElements()
        timerState.setTimer = {
            seconds : Number(elements.inputs.inputSeconds.value),
            minutes : Number(elements.inputs.inputMinutes.value),
            hours : Number(elements.inputs.inputHours.value),
        }
    }
    
}

elements.btnStart.addEventListener('click', startTimer)
elements.btnStop.addEventListener('click', stopTimer)
elements.btnRestart.addEventListener('click', restartTimer)
