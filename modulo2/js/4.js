//IIFE IMMEDIATELY invoked function expression
// quando queremos que nossas funções e variáveis 
// não entrem em contato com oo escopo global
// e sejam iniciadas imediatamente

(function(idade, peso, altura){
    const sobrenome = 'moura';
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }
    function falaNome(){
        console.log('Olá,', criaNome('joao'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(50, 77.50, 1.77);

const nome = 'qualquer coisa'


// Factory  functions 
// função retorna um bjeto
function criaPessoa(nome, sobrenome, alt, pe){
    return {
        nome, 
        sobrenome,
        // getter 
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // setter para o getter substituui o valor 
        // do nome
        set nomeCompleto(valor){
            valor = valor.split(' ')
            // SHIFT remove o primeiro item e o retorna
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        },

        fala(assunto= 'Fala sobre JS'){
            return `${this.nome} ${this.sobrenome}, ${assunto}`
        }, 
        altura : alt, 
        peso : pe, 
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}
const p1 = criaPessoa('Victor', 'rodrigues', 1.70, 80);
p1.nomeCompleto = 'joao moura'
console.log(p1.fala());



console.log();
function comGet(nome, idade){
    // retorna um objeto
    return{
        nome, 
        idade,
        // getter faz o objeto se comportar como um atributo
        get fala(){
            return  this.idade > 18  ? 
            `${this.idade} Maior de idade` : 
            `${this.idade} é menor de idade`
        }
    }   
}

const p3 = comGet('Joao', 29);
console.log(p3.fala);
