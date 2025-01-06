const nomes = [ 'joao', 'victor', 'ventura', 'silva', 'carvalho' ]

// imitando shift com o splice remove o primeiro elemento
const shiftArr = nomes.splice(0, 1)
console.log(shiftArr);
console.log(nomes);

// imitando o push adicionando no final
const pushArr = nomes.splice(nomes.length, 0, 'maria', /*'dias' , /*'mariana'*/)
console.log(nomes);

// imitando o unshift adiciona no primeiro
const unshiftArr = nomes.splice(0, 0, 'lola')
console.log(nomes);


