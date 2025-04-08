function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
}

// Adiciona um método ao protótipo de Book
// Esse método retorna um resumo sobre o livro
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years Old`
}

// innitialized a object
const book1 = new Book("book one", "john doe", "1999")
const book2 = new Book("book tow", "john doe", "1998")


// Adiciona mais um método ao protótipo de Book
// Esse método permite revisar (alterar) o ano de publicação do livro
Book.prototype.revise = function(newYear){
    this.year = newYear
    this.revise = true
}

console.log(book1.getAge())
book1.revise("2010")
console.log(book1.getAge())