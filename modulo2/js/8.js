// Concatenando arrays
const a1 = [1,2,3]
const a2 = [4,5,6]
// concatena os arrays
// const a3 = a1.concat(a2)
// pode receber mais arrays e diferentes valores que serão concatenados
// com concat
const a3 = a1.concat(a2,[7,8,9],'joao')
console.log(a3);
// tambem podemos concatenas utilizando o spread,
// também podem receber arrays e diferentes tipos de valor
// const a4 = [...a1, 'joao' ...a2, ...[7,8,8]]
const a4 = [...a1, ...a2]
console.log(a4);
