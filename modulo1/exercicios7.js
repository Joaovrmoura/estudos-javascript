// escreva uma função que recebe dois numero
// e retorna o maior deles

function retornaMaior(num1, num2){
    return Math.max(num1, num2)
}

// outra forma arrow Function
const maior2 = (x, y) => x > y ? x : y

const maiorNum = retornaMaior(5, 25);
console.log(maiorNum);
console.log(maior2(2, 20));


// saber se é paisagem. deve retornar true ou false
const is_paisagem = (alt, larg) => alt <= larg
console.log(is_paisagem(1080, 1920));

// saber se o numero é diisivel por 3 e retorna Fizz
// saber se o numero é diisivel por 5 e retorna Buzz
// saber se o numero é diisivel por 3 e 5  retorna FizzBuzz
// saber se o numero não é diisivel por 3 e 5  retorna numero
// checar se é um número 
// use funçãp com numero de 0 a 100

console.log();

const is_divisivel = (num) => {
    op = ['fizz', 'buzz']
    if(typeof num !== 'number') return num + ' não é number'
    if(num %3 == 0 && num %5 == 0) return op[0] + op[1]
    if(num %3 == 0) return op[0];
    if(num %5 == 0) return op[1];
    return num
}

for(let i = 0; i < 100; i++){
    console.log(is_divisivel(i));
}

