let num1 = 10;
let num2 = '10';
const num = num1 === num2
const nums = num1 != num2
console.log(num == true || num1 == 10)
console.log(num)

const user = 'joao'
const senha = '12345'
const vaiLogar = user == 'joao' && senha == '12345'
console.log(vaiLogar)


function falaOi(){
    console.log('OI')
}
// valores FALSE '', "", undefined, NaN, null
const cond = false // podia ser  '', "", undefined, NaN, null
// caso encontre valores FALSY retorna-o imediatamente
// caso contrário retorna o último valor true
console.log(cond && falaOi());
console.log(cond || falaOi());


const hora = 13;

if(hora >= 0 && hora < 13){
    console.log('Bom dia')
}else if(hora > 12 && hora < 17){
    console.log('Boa tarde')
}else if(hora < 17 && hora < 24){
    console.log('Boa noite')
}  
