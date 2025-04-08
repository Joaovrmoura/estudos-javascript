// inicia cada vez que instaciamos uma class

function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year

    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// innitialized a object
const book1 = new Book("book one", "john doe", "1999")
const book2 = new Book("book tow", "john doe", "1998")

console.log(book2)