// Objetos em js, podem ter métodos
// seus atributos são executados com pontos
const pessoa = {
    nome: 'joao', 
    sobrenome: 'rodrigues', 
    idade: 25,
    // método da função THIS aponta para as variáveis dentro do objeto
    fala(){
         console.log(`A pessoa ${this.nome} falou sua idade é ${this.idade}`)
    },
    incrementaIdade(){
        this.idade++;
    }
};
console.log(pessoa);
// acessando os métodos dentro do objeto
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

//Parametro
function criarPessoa(nome, sobrenome, idade){
    return{ nome, sobrenome,idade };
};
                        //Argumentos 
const pessoa1 = criarPessoa('joao', 'rodrigues', 25);
const pessoa2 = criarPessoa('maria', 'rodrigues', 125);
const pessoa3 = criarPessoa('pedro', 'aguiar', 50);
const pessoa4 = criarPessoa('joao', 'moura', 90);

console.log(pessoa1)
console.log(pessoa3.sobrenome)
