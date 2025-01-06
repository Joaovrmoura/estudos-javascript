const elementos = [
    {tag : 'p', texto :'Frase 1'},
    {tag : 'div', texto : 'Frase 2'},
    {tag : 'footer', texto : 'Frase 3'},
    {tag : 'section', texto : 'Frase 4'}
]

const container = document.querySelector('.container');
const div = document.createElement('div');
container.appendChild(div);

function criarParagrafo(tag){
    const p = document.createElement(tag);
    return p;
}

function adicionarNoHtml(elementos){
    for(i = 0; i < elementos.length; i++){
        const {texto}  = elementos[i];
        const {tag} = elementos[i];

        const paragrafo = criarParagrafo(tag);
        paragrafo.innerHTML = texto;
        div.appendChild(paragrafo);
    }
}

adicionarNoHtml(elementos);



