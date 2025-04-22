class MenuSlider {
    private menuItens: NodeListOf<HTMLDivElement>;
    private content: NodeListOf<HTMLDivElement>;
    private btnMenu: HTMLDivElement | null;
    private linksMenu: HTMLDivElement | null;
    private menuMobile: HTMLDivElement | null;

    private slideContainer: HTMLDivElement | null;
    private moveSlide: HTMLDivElement | null;

    private arrows: NodeListOf<HTMLElement> | null = null;
    private actualIndex: number = 0;
    private isOpen: boolean = false;

    constructor() {
        this.menuItens = document.querySelectorAll<HTMLDivElement>('.item-nav');
        this.content = document.querySelectorAll<HTMLDivElement>('.content');
        this.btnMenu = document.querySelector<HTMLDivElement>('#btnMenu');
        this.linksMenu = document.querySelector<HTMLDivElement>('.links-mobile');
        this.menuMobile = document.querySelector<HTMLDivElement>('.nav-mobile');

        this.slideContainer = document.querySelector<HTMLDivElement>('.slide-container');
        this.moveSlide = document.querySelector<HTMLDivElement>('.moveSlide');

        const arrowContainer = document.querySelector<HTMLDivElement>('.arrows');
        this.arrows = arrowContainer?.querySelectorAll<HTMLElement>('i') ?? null;

        this.init();
    }

    private init(): void {
        this.setupMenuToggle();
        this.setupSlideButtons();
        this.setupMenuItems();
        const qtdSlides = this.slideContainer?.getElementsByTagName('img').length ?? 0;
        this.setupSlideArrows(qtdSlides);
    }

    private setupMenuToggle(): void {
        if (this.btnMenu && this.menuMobile && this.linksMenu) {
            this.btnMenu.onclick = () => {
                if (!this.isOpen) {
                    this.menuMobile!.style.height = 'auto';
                    this.linksMenu!.style.display = 'flex';
                } else {
                    this.menuMobile!.style.height = '80px';
                    this.linksMenu!.style.display = 'none';
                }
                this.isOpen = !this.isOpen;
            };
        }
    }

    private setupSlideArrows(qtdSlides: number): void {
        if (this.arrows) {
            this.arrows.forEach(arrow => {
                arrow.addEventListener('click', () => {
                    if (arrow.id === 'left' && this.actualIndex > 0) {
                        this.actualIndex--;
                    } else if (arrow.id === 'right' && this.actualIndex + 1 < qtdSlides) {
                        this.actualIndex++;
                    }
                    this.updateSlide(this.actualIndex);
                });
            });
        }
    }

    private setupSlideButtons(): void {
        const qtdSlides = this.slideContainer?.getElementsByTagName('img');
        if (!qtdSlides || !this.moveSlide) return;

        for (let i = 0; i < qtdSlides.length - 1; i++) {
            const moveBtn = document.createElement('div');
            moveBtn.classList.add('slide');
            this.moveSlide.appendChild(moveBtn);
        }

        const buttons = document.querySelectorAll<HTMLElement>('.slide');
        buttons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.actualIndex = index;
                this.updateSlide(index);
            });
        });
    }

    private updateSlide(index: number): void {
        const slides = this.slideContainer?.getElementsByTagName('img');
        if (!slides) return;

        Array.from(slides).forEach((slide, i) => {
            slide.classList.toggle('hiddenSlide', i !== index);
        });

        document.querySelectorAll<HTMLElement>('.slide').forEach((btn, i) => {
            btn.classList.toggle('activeSlide', i === index);
        });
    }

    private changeContainer(containerName: string): void {
        this.content.forEach(container => {
            const isActive = container.classList.contains(containerName);
            container.classList.toggle('content-hidden', !isActive);
        });
    }

    private activateMenu(indexToActivate: number): void {
        this.menuItens.forEach((item, index) => {
            item.classList.toggle('active', index === indexToActivate);
        });
    }

    private setupMenuItems(): void {
        this.menuItens.forEach((item, index) => {
            item.addEventListener('click', () => {
                const name = item.textContent?.toLocaleLowerCase();
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
