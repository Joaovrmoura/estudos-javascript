class Game{
    #secretWorld 
    #avatar = ['head', 'body', 'arms','legs']
    #chances = 0
    #acertos = 0
    #victories = 0
    #defeats = 0

    constructor(){
        this.initializedGame()
    }


    async initializedGame(){
        await this.wordsRegister() 
        this.initializedDOMElements()
        this.initializeDisplay()
        this.selectedLetter()
    }

    initializedDOMElements(){
        this.btn = document.querySelectorAll('#btn-letter')
        this.showLetters = document.getElementById('secretWorld')
        this.victoriesElement = document.getElementById('victories')
        this.defeatsElement = document.getElementById('defeats')
        this.resultModal = document.getElementById('resultModal')
        this.resultText = document.getElementById('resultText')
        this.restart = document.getElementById('restartButton')
    }

    async wordsRegister(){
        const response = await fetch('words.json')
        const data = await response.json()
        const categories = Object.keys(data)
        let randomCategory = categories[this.randomIndex(categories.length)]
        const categoryWords = data[randomCategory]

        console.log(categoryWords[this.randomIndex(categoryWords.length)].toLowerCase())
        this.#secretWorld = categoryWords[this.randomIndex(categoryWords.length)].toLowerCase();
           
    }
    
    randomIndex(max) {
        return Math.floor(Math.random() * max);
    }
    

    initializeDisplay(){
        for(let letters of this.#secretWorld.split('')){
            const letter = document.createElement('div')
            letter.classList.add('letter', 'border-b-6', 'border-slate-500', 'text-8xl')
            letter.innerHTML = 'x'
            this.showLetters.appendChild(letter)
        }
    }
  

    restartGame(){
        this.restart.addEventListener('click', (e) => {
            this.#chances = 0
            this.#acertos = 0
            this.resultModal.classList.add('hidden')

            this.#avatar.forEach(item => {
                const elements = document.getElementById(item)
                elements.classList.add('hidden')
            })

            const letters = this.showLetters.getElementsByTagName('div')
             // Verifica letras corretas
            for(let i = 0; i < this.#secretWorld.length; i++){
                letters[i].innerHTML = '_'
            }
        })
    }
    avatarBody(avatarPart){
        const elementOfBody = document.getElementById(avatarPart)
        elementOfBody.classList.remove('hidden')

    }

    showResult(message) {
        this.resultText.textContent = message
        this.resultModal.classList.remove('hidden')
    }

    getLeeter(chosenLetter){
        let correctGuess = false
        const letters = this.showLetters.getElementsByTagName('div')

        // Verifica letras corretas
        for(let i = 0; i < this.#secretWorld.length; i++){
            if(chosenLetter === this.#secretWorld[i]){
                letters[i].textContent = this.#secretWorld[i]
                this.#acertos++
                correctGuess = true
            }
        }

        // Lógica de erros
        if(!correctGuess){
            if(this.#avatar.length > this.#chances){
                this.avatarBody(this.#avatar[this.#chances])
                this.#chances++
            }

            if(this.#chances === this.#avatar.length){
                this.#defeats++
                this.restartGame()
                this.showResult('Você perdeu! Tente novamente!')
                this.updateScore()
            }
        }

        // Verifica vitória
        if(this.#acertos === this.#secretWorld.length){
            this.#victories++
            this.showResult('Parabéns! Você venceu!')
            this.updateScore()
            this.restartGame()
        }
    }


    selectedLetter(){
        this.btn.forEach(element => {
            element.addEventListener('click', (e) => {
               this.getLeeter(element.textContent)
            })

        });
    }
    
    updateScore() {
        this.victoriesElement.textContent =  this.#victories
        this.defeatsElement.textContent = this.#defeats
    }

}



const game = new Game()






