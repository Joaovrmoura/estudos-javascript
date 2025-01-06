// map aplica condições e retorna um novo array com tamanho igaul ao tamanho
// do array original

const numbers = ['5', '50', '80', '1', '2', '3', '5', '7', '11', '15', '22', '27']

// map com função anônima
const numbersFolded = numbers.map(function (obj) {
    return obj * 2
})

const people = [
    { name: 'luana', age: 61 },
    { name: 'lorrane', age: 24 },
    { name: 'juliana', age: 32 },
    { name: 'fernanda', age: 12 },
    { name: 'luciane', age: 23 },
]

// 1 retorne apenas uma string com o nome da pessoa
// 2 remova apenas a chave "nome" do objeto
// 3 adicione a chave id em cada objeto

const justName = people.map(obj => obj.name)
console.log(justName);

const objWithoutname = people.map(function (obj) {
    return { age: obj.age }
})

const addKeyId = people.map((obj, id) => {
    obj.id = id
    return obj
})
// outra forma usando o spread
const addKeyId2 = people.map((obj, id) => {
    newObj = {...obj}
    newObj.id = id 
    return newObj
})

console.log(addKeyId2);











