class Game{

    #cardsRandom = []
    #displayedCards = []
    #chosen = []
    #isChosen = false
    #lastTwoElements = []
    #countTurnCards = 0

    constructor(){
        this.ElementsOfDOM()
        this.cards = this.allCards()
        this.displayCards()
        this.selectedCards()
    }
        
    allCards(){
        return ['beth', 'cerebro', 'jerry', 'jessica', 'morty', 'meeseeks', 
        'pessoa-passaro', 'rick', 'pickle-rick', 'scroopy', 'summer', 'logo']
    }

    ElementsOfDOM(){
        this.container = this.getElementsEndAssociateClass('.card-container')
    }

    showVictory(){
        if(this.#countTurnCards == 6){
            alert('Voc~e venceu')
        }
    }
    
    randCards(){
            // Embaralha as cartas
            let shuffled = this.cards.sort(() => Math.random() - 0.5);
        
            // Seleciona as 6 primeiras cartas
            this.#cardsRandom = shuffled.slice(0, 6);
    
            return this.#cardsRandom;
    }
    
    displayCards() {
        let randCards = this.randCards();  
        let cardPairs = [...randCards, ...randCards]; 
        console.log(cardPairs);
        
        cardPairs.sort(() => Math.random() - 0.5);
    
        cardPairs.forEach(cardName => {
            const card = document.createElement('img');
            card.classList.add('card-item');
            card.src = '../src/images/back.png';
            
            this.#displayedCards.push(cardName);
            this.container.appendChild(card);
        });
    }


    getElementsEndAssociateClass(selectorElement){
        let element = document.querySelector(selectorElement)
        if(element == null){
            throw new Exception("Elemento não existe" + selectorElement);
        }
        element.classRefer = this
        return element
    }

    removeAllElements(){
        this.#chosen.splice(0, 2) 
        if(this.#chosen != 0){
            this.#chosen.pop()
        }    

        this.#lastTwoElements.splice(0, 2)
        if(this.#lastTwoElements != 0){
            this.#lastTwoElements.pop()
        }
    }

    turnCards(element, index){
        setTimeout(() => {
            element.src = '../src/images/' + this.#displayedCards[index] + '.png'
            this.showVictory()
        }, 300)
        element.classList.add('animeCard')
      
    }

    turnOverCards(){
        if(document.querySelectorAll('.wrong-cards')){
             document.querySelectorAll('.wrong-cards').forEach(card => {
                 card.classList.remove('wrong-cards')
                 setTimeout(() => {
                    card.classList.remove('animeCard')
                    card.src = '../src/images/back.png'
                 }, 1500)
             })
         }
    }


    restartCards(){
        this.#lastTwoElements.forEach(cardElement => {
            cardElement.classList.add('wrong-cards')
        });
        
        if(this.#lastTwoElements[0] == this.#lastTwoElements[1]){
            alert('Escolha outra carta!!')
        }

        this.removeAllElements()
        this.#isChosen = true 
        
        setTimeout(() => {
            this.#isChosen = false
        }, 1500)

        this.turnOverCards()
    }

    cardsEvents(element, index){
        if(this.#isChosen == false){
            // se as duas cartas já foram escolhidas
            if(this.#chosen.length < 2 && this.#lastTwoElements.length < 2){

                this.#lastTwoElements.push(element)
                this.turnCards(element, index)
                this.#chosen.push(this.#displayedCards[index])
                
                // se as duas cartas são iguais..
                if(this.#chosen.length == 2){
                    if(this.#lastTwoElements[0] != this.#lastTwoElements[1] && this.#chosen[0] == this.#chosen[1]){
                        this.#isChosen = false
                        this.#countTurnCards++
                        console.log(this.#countTurnCards);

                        this.removeAllElements()
                    }else{
                        this.restartCards()
                    }
                }
            }
        }     
    }

    selectedCards(){
        document.querySelectorAll('.card-item').forEach((element, index) => {
            element.addEventListener('click', e => { 
                this.cardsEvents(element, index)     
             
            })
        });
    }
    
}

new Game()
