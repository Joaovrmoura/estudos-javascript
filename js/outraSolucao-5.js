const elementos = [
    {tag : 'p', texto :'Frase 1'},
    {tag : 'div', texto : 'Frase 2'},
    {tag : 'footer', texto : 'Frase 3'},
    {tag : 'section', texto : 'Frase 4'}
];

const container = document.querySelector('.container');
container.querySelector('h1');
h1.style.color = 'blue';
// cria uma tag
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    // desestruturaçã. Pegando cada elemento individualemte
    // usando i como indice
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    // exibir o texto na página, sem formatação HTML.
    let textoCriado = document.createTextNode(texto);
    // tagCriada.innerText = texto
    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}
    
// adidiona filho a tag com a class=container
container.appendChild(div);

