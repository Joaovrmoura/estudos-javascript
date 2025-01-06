                // -5        -4         -3       -2        -1
                //  0         1          2        3         4
const nomes = [ 'joao', 'victor', 'ventura', 'silva', 'carvalho' ]

// splice é um método que simula oque podemos fazer com pop shift e unshift
// nomes.splice(inicio, ate final dos indices que qwero deletar, 'adiciono valores')

nomes.splice(0 /*indice*/, 0 /* quantos elementos quero remover*/, 
'amor'/*item adicionado pode ter varios*/)
console.log(nomes);
console.log();
// removendo usando indices negativos
// nomes.splice(-2, 2)

// podemos pegar o valor removido e atribuir a uma variável
// porém diferente do shift essa variavel vira um array
const apagados = nomes.splice(-3, 2)
console.log(apagados);
console.log(nomes);
console.log();

// removendo de um numero até o final com MAX_VALUES
// vai até o final do array
const maxValues = nomes.splice(-2, Number.MAX_VALUE)
console.log(maxValues);
console.log(nomes);

// =============================== continua


