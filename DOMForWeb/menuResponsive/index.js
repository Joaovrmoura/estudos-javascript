const menuItens = document.querySelectorAll('.item-nav')
const content = document.querySelectorAll('.content')
const btnMenu = document.querySelector('#btnMenu')
const linksMenu = document.querySelector('.links-mobile')
const menuMiblie = document.querySelector('.nav-mobile')

const slideContainer = document.querySelector('.slide-container')

const slides = slideContainer.getElementsByTagName('img')
const moveSlide = document.querySelector('.moveSlide')
const qtdSlides = slideContainer.getElementsByTagName('img')

const arrows = document.querySelector('.arrows')
const arrowsDirect = arrows.querySelectorAll('i')

let ACTUALINDEX = 0
let ISOPEN = false


function openMenu(){
    btnMenu.onclick = (e) => {
        if(ISOPEN == false){
            menuMiblie.style.height = 'auto'
            linksMenu.style.display = 'flex'
            ISOPEN = true
        }else{
            menuMiblie.style.height = '80px'
            linksMenu.style.display = 'none'
            ISOPEN = false
        }
    }
}

function moveSlideForArrows(qtdSlides){
    arrowsDirect.forEach((arrow, index) => {
        arrow.addEventListener('click', e => {
            if(arrow.id == 'left'){
                if(ACTUALINDEX > 0) ACTUALINDEX--
            }
            if(arrow.id == 'right'){
                if(ACTUALINDEX + 1 <= qtdSlides - 1) ACTUALINDEX++
            }
            slideMovingForIndex(ACTUALINDEX)
        })
    })  
}


function moveSlidesForButton(){
    for(let i = 0; i < qtdSlides.length - 1; i++){
        const moveBtn = document.createElement('div')
        moveBtn.classList.add('slide')
        moveSlide.appendChild(moveBtn)
         
        document.querySelectorAll('.slide').forEach((moveFor, index) => {
            moveFor.addEventListener('click', event => {
                ACTUALINDEX = index
                slideMovingForIndex(index)
            })
        })     
    }    
}

function slideMovingForIndex(indexSlide){
    Object.values(qtdSlides).forEach((slide, index) => {
        if(indexSlide != index){
            slide.classList.add('hiddenSlide')
        }else{
            slide.classList.remove('hiddenSlide')
        }
    })

    document.querySelectorAll('.slide').forEach((item, index) => {
        if(indexSlide != index){
            item.classList.remove('activeSlide')
        }else{
            item.classList.add('activeSlide')
        }
    })
}


function changeContainer(activeContainer){
    content.forEach(container => {
        if(container.classList.contains(activeContainer)){
            container.classList.remove('content-hidden')
        }else{
            container.classList.add('content-hidden')
        }
    })
}

function activeMenu(indexElement){
    menuItens.forEach((link, index) => {
        if(index != indexElement){
            link.classList.remove('active')
        }else{
            link.classList.add('active')
        }
    }); 
}


menuItens.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        changeContainer(link.textContent.toLocaleLowerCase())
        activeMenu(index)
    })
});

openMenu()
moveSlidesForButton()
moveSlideForArrows(qtdSlides.length)

