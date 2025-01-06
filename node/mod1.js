// AQUI NÓS EXPORTAMOS AS COISAS

// const nome = 'joao'
// const sobrenome = 'rodrigues'

// const falaNome = () => nome + ' ' + sobrenome;


// // exports funciona como um objeto
// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome
// // module.exports.falaNome = falaNome
// // console.log(module.exports);

// // é a mesma coisa que a acima
// exports.nome = nome
// // como é um objeto a chave pode ter quaquer nome
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome
// this.qualquerCoisa = 'qualquer coisa'


class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}
exports.Pessoa = Pessoa

const nome = 'joao'
const sobrenome = 'moura'

// PODEMOS subseecrever objetos
module.exports = {
    nome, sobrenome, Pessoa
}