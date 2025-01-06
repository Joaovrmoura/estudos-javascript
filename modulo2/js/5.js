//Funções construtoras em js
// precisamos iniciar o nome com letra 
// maiúscula(convenção)
// e utilizamos a palavra new
// construtora -> Pessoa (new)


// CLasses são moldes para criar objetos
function Pessoa(nome, sobrenome){
    // métodos ou atributos Privados do objeto
    const ID = 123
    const metodoInterno = () =>{
        console.log('sou existo dentro do objeto')
    }
      
    // criei uma chave no objeto
    // aqui são atributos e métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () =>{
        console.log('sou método', this.nome + this.sobrenome);
    }

}
// a palavra new cria um novo objeto vazio e faz o this
// apontar para o objeto vazio
const p1 = new Pessoa('joao', 'moura')
const p2 = new Pessoa('victor', 'moura')

console.log(p1.nome);
p1.metodo()
console.log();
