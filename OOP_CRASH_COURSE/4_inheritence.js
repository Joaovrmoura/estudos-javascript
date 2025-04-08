function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// Adiciona um método ao protótipo de Book
// Esse método retorna um resumo sobre o livro
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
// Função construtora Magazine (revista)
// Ela herda as propriedades (title, author, year) da função Book
function Magazine(title, author, year, month) {
    // Chama a função Book dentro do contexto de Magazine
    // Assim, Magazine herda title, author e year
    Book.call(this, title, author, year);
    // Define a propriedade específica de Magazine (o mês de publicação)
    this.month = month;
}

// Herda os métodos do protótipo de Book
// Faz Magazine.prototype ser um novo objeto baseado em Book.prototype
Magazine.prototype = Object.create(Book.prototype);

// instatiate Magazine objects
const mag1 = new Magazine('mag One', "josh doe", "2018", "jan");

console.log(mag1);
