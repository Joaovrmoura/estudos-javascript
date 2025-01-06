const numeros = [ '64', '9',  '77', '9','18', '68', '5',  '63','46', '57', '25', '71', '3' ]

const pessoas = [
    {nome : 'luana', idade : 61},
    {nome : 'lorrane', idade : 24},
    {nome : 'juliana', idade : 32},
    {nome : 'fernanda', idade : 12},
    {nome : 'luciane', idade : 23},
]

// filter filtra os valores dentro de uuma array e retorna um novo array

// Primeira forma
// itera sobre o array que está recebendo o método filter
// o callback é utilizado dentro do filter
function callbackFilter(valor, indice, array){
    return valor > 10
}

// Segunda forma
// uma função anônima filtra os valores e retorna um novo 
// array filtrado
const filtrados = numeros.filter(function(valor){
    return valor > 10
})

// Terceira forma
// apenas troquei arrow arrow function
const filtrados2 = numeros.filter((valor, indice, array) => {
    return valor > 10
})


// 1 retorne as pessoas que tem o nome com 7 letras ou mais
// 2 pessoas com mais de 50 anos
// 3 pessoas que o nome termina com a


// em condições que retornam apenas um valor posso diminuir o tamanho da
// função e retirar os () e as {} da arrow function
const nomes5Elementos = pessoas.filter(obj => obj.nome.length >= 7);
console.log(nomes5Elementos);

const filtraIdades50 = pessoas.filter(obj => obj.idade > 50);
console.log(filtraIdades50);
// endsWith retorna se o valor final é igual ao que passei como parâmetro
const filtraNomesComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(filtraNomesComA);

