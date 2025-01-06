// NESTE EXERCICIO O PARAGRAFO TEM QUE FICAR COM A 
// COR DE FUNDO DO BODY 

// QUREYSELECTOR Encontra o primeiro elemento da
const paragrafos = document.querySelector('.paragrafos');

// Pegando todos os elementos p do html
// esses elementos se comportam como arrays
// e são iteraveis
const ps = paragrafos.querySelectorAll('p')

// pegando os estilos definidos e compilados pelo navegador
const estiloBody = getComputedStyle(document.body);
// estiloBody. = TODO ESTILO UTILIZADO NO SITE
const backgroundColorBody = estiloBody.background;

console.log(backgroundColorBody);

for(let p of ps){
    // usando estilo computado
    // TODAS AS PROPRIEDADES DO CSS VAI ESTAR EM CAMALCASE
    p.style.background = backgroundColorBody;
    p.style.borderRadius = '13px';
    p.style.color = 'white';
    p.style.padding = '10px';
}

// for(let p in ps){
//     console.log(ps[p]);
// }
