let scrollContainer = document.querySelector('.gallery')
let backBtn = document.getElementById('backBtn')
let nextBtn = document.getElementById('nextBtn')

scrollContainer.addEventListener('wheel', event => {
    event.preventDefault()
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior = "auto"
})

nextBtn.addEventListener('click', e =>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900;
})
backBtn.addEventListener('click', e =>{
    scrollContainer.style.scrollBehavior = "smooth"
    // 900 = tamanho da div gallery que contém as imagens
    scrollContainer.scrollLeft -= 900;
})