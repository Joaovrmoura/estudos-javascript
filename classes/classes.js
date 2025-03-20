class Pessoa{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName
    }
    falar(){
        console.log(`${this.name} está falando`);
    }
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(params) {
    console.log(`${this.nome} está falando`);
}

const p1 = new Pessoa('luiz', 'garcia')
console.log(p1.name, p1.lastName);
const p2 = new Pessoa2('joao', 'gilberto')
p1.falar();
p2.falar()
