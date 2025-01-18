// Operadores ternários em javaScript

const idade = 15

//Resultado ? = if true := else false
const maior = idade > 18 ? 'maior' : 'menor'
console.log(maior);

const pontuacao = 999;
//Condicionau antes 
//if resultado 'True' else 'false'
const nivelUsuario = pontuacao >= 1000 ? 'Usuario nivel brabo' : 'Usuario comum'
console.log(nivelUsuario);

const existeValor = null
// se a o valor for real retorna valor || retorna outra coisa
const saberSeExiste = existeValor || 'não existe'

// mesma lógica
const saberSeExiste2 = existeValor ?? 'outra Coisa'
console.log(saberSeExiste);

