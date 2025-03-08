// function criaPessoa(nome, sobrenome){
//     return{
//         nome, 
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('joao', 'moura')
// console.log(p1.nomeCompleto)

function Pessoa(name, lastName){
    this.name = name;
    this.lastName = lastName
}

const p1 = new Pessoa('luiz', 'garcia')
console.log(p1.name, p1.lastName);
