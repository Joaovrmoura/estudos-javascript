const btn = document.querySelector('#togleButton');

btn.addEventListener('click', e => {
    if (document.body.className == 'black') {
        document.body.classList.remove('black')
        document.body.classList.add('light')
    } else {
        document.body.classList.remove('light')
        document.body.classList.add('black')
    }
});

function game() {
    const pedra = document.querySelector('.pedra')
    const papel = document.querySelector('.papel')
    const tesoura = document.querySelector('.tesoura')

    const contagem = document.querySelector('.contagemRegressiva')
    const machineResults = document.querySelector('.machineResults')
    const userResults = document.querySelector('.userResults')
    const result = document.querySelector('.result')

    let userPoints = 0;
    let machinePoints = 0;
    let isRunning = false

    function getStyle(itemHtml){
        itemHtml.style.transform = 'translateY(-25px)'
        itemHtml.style.fontSize = '90px'
        setTimeout(() => {
            itemHtml.style.fontSize = '70px'
            itemHtml.style.transform = 'translateY(0px)'
        }, 1500)
       
    }
    
    function machineChoice() {
        const op = ['pedra', 'papel', 'tesoura']
        let choice = Math.floor(Math.random() * (2 + 1) + 0).toFixed(0)
        return op[choice]
    }

    function getResult(choiceItem) {
        const computerChoose = machineChoice()
        result.style.display = 'none'
        getStyle(choiceItem)
        computedResult(choiceItem.classList.value, computerChoose);
        startButton(choiceItem.innerHTML, caracters(computerChoose))
    }

    function startButton(yourchoose, machinechoose) {
        if (isRunning) return
        const yourResult = document.querySelector('.you')
        const machineResult = document.querySelector('.machine')

        contagem.style.display = 'flex'
        contagem.innerHTML = Number(3)
        
        const intervalo = setInterval((e) => {
            isRunning = true
            contagem.innerHTML -= 1
            if(contagem.innerHTML == 0) {
                isRunning = false
                result.style.display = 'flex'
                yourResult.innerText = yourchoose;
                machineResult.innerText = machinechoose;
                clearInterval(intervalo)

                setTimeout(() => {
                    result.style.display ='none'
                }, 1500)

                contagem.style.display = 'none'
                userResults.innerHTML = userPoints
                machineResults.innerHTML = machinePoints
            }
        }, 500)
    }


    function yourChoise() {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('pedra')) {
                getResult(pedra)
            }
            if (el.classList.contains('papel')) {
                getResult(papel)
            }
            if (el.classList.contains('tesoura')) {
                getResult(tesoura)
            }

        })

    }
    yourChoise()
    function caracters(choose) {

        const arr = ['✊', '🖐', '✌']
        if (choose == 'pedra') return arr[0]
        if (choose == 'papel') return arr[1]
        if (choose == 'tesoura') return arr[2]

    }

    function computedResult(userChoice, machinechoice) {
        if (userChoice === machinechoice) {
            return 'draw'
        }
        if (
            (userChoice == 'pedra' && machinechoice == 'tesoura') ||
            (userChoice == 'tesoura' && machinechoice == 'papel') ||
            (userChoice == 'papel' && machinechoice == 'pedra')
        ) {
            userPoints++
            return 'userWin'
        } else {
            machinePoints++
            return 'machineWin'
        }

    }

}
game()