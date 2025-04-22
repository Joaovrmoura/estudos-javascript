"use strict";
class MenuSlider {
    constructor() {
        var _a;
        this.arrows = null;
        this.actualIndex = 0;
        this.isOpen = false;
        this.menuItens = document.querySelectorAll('.item-nav');
        this.content = document.querySelectorAll('.content');
        this.btnMenu = document.querySelector('#btnMenu');
        this.linksMenu = document.querySelector('.links-mobile');
        this.menuMobile = document.querySelector('.nav-mobile');
        this.slideContainer = document.querySelector('.slide-container');
        this.moveSlide = document.querySelector('.moveSlide');
        const arrowContainer = document.querySelector('.arrows');
        this.arrows = (_a = arrowContainer === null || arrowContainer === void 0 ? void 0 : arrowContainer.querySelectorAll('i')) !== null && _a !== void 0 ? _a : null;
        this.init();
    }
    init() {
        var _a, _b;
        this.setupMenuToggle();
        this.setupSlideButtons();
        this.setupMenuItems();
        const qtdSlides = (_b = (_a = this.slideContainer) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('img').length) !== null && _b !== void 0 ? _b : 0;
        this.setupSlideArrows(qtdSlides);
    }
    setupMenuToggle() {
        if (this.btnMenu && this.menuMobile && this.linksMenu) {
            this.btnMenu.onclick = () => {
                if (!this.isOpen) {
                    this.menuMobile.style.height = 'auto';
                    this.linksMenu.style.display = 'flex';
                }
                else {
                    this.menuMobile.style.height = '80px';
                    this.linksMenu.style.display = 'none';
                }
                this.isOpen = !this.isOpen;
            };
        }
    }
    setupSlideArrows(qtdSlides) {
        if (this.arrows) {
            this.arrows.forEach(arrow => {
                arrow.addEventListener('click', () => {
                    if (arrow.id === 'left' && this.actualIndex > 0) {
                        this.actualIndex--;
                    }
                    else if (arrow.id === 'right' && this.actualIndex + 1 < qtdSlides) {
                        this.actualIndex++;
                    }
                    this.updateSlide(this.actualIndex);
                });
            });
        }
    }
    setupSlideButtons() {
        var _a;
        const qtdSlides = (_a = this.slideContainer) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('img');
        if (!qtdSlides || !this.moveSlide)
            return;
        for (let i = 0; i < qtdSlides.length - 1; i++) {
            const moveBtn = document.createElement('div');
            moveBtn.classList.add('slide');
            this.moveSlide.appendChild(moveBtn);
        }
        const buttons = document.querySelectorAll('.slide');
        buttons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.actualIndex = index;
                this.updateSlide(index);
            });
        });
    }
    updateSlide(index) {
        var _a;
        const slides = (_a = this.slideContainer) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('img');
        if (!slides)
            return;
        Array.from(slides).forEach((slide, i) => {
            slide.classList.toggle('hiddenSlide', i !== index);
        });
        document.querySelectorAll('.slide').forEach((btn, i) => {
            btn.classList.toggle('activeSlide', i === index);
        });
    }
    changeContainer(containerName) {
        this.content.forEach(container => {
            const isActive = container.classList.contains(containerName);
            container.classList.toggle('content-hidden', !isActive);
        });
    }
    activateMenu(indexToActivate) {
        this.menuItens.forEach((item, index) => {
            item.classList.toggle('active', index === indexToActivate);
        });
    }
    setupMenuItems() {
        this.menuItens.forEach((item, index) => {
            item.addEventListener('click', () => {
                var _a;
                const name = (_a = item.textContent) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
                if (name) {
                    this.changeContainer(name);
                    this.activateMenu(index);
                }
            });
        });
    }
}
// Inicialização
new MenuSlider();
