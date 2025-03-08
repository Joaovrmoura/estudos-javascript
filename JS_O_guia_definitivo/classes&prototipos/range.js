// Função para criar herança (usando Object.create para herdar métodos)
function range(from, to) {
    // Cria um objeto que vai receber métodos
    var r = Object.create(range.methods);
    
    // Define as propriedades do intervalo
    r.from = from;
    r.to = to;

    return r; // Retorna o objeto criado
}

// ele extrai da função range os métodos
range.methods = {
    // Retorna true se x está no intervalo; caso contrário, false
    includes: function(x) { 
        return this.from <= x && x <= this.to; 
    },
    // Chama f uma vez para cada inteiro no intervalo.
    foreach: function(f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    // Retorna uma representação de string do intervalo
    toString: function() { 
        return "(" + this.from + "..." + this.to + ")"; 
    }
};

// Criação de um objeto range
var r = range(1, 3);  


console.log(r.includes(2));  // => true: 2 está no intervalo
r.foreach(console.log);      // Imprime 1 2 3
console.log(r.toString());   // Imprime (1...3)
