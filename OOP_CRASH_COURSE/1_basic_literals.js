// console.log(window)
//versão do navegador
// console.log(navigator.appVersion)

const book1 = {
    title: 'book 1',
    author: 'john doe', 
    year: '2023',
    getSummary: function(){
        return `${this.title} was written by 
        ${this.author} in ${this.year}`
    }
}
const book2 = {
    title: 'book 2',
    author: 'maria', 
    year: '2020',
    getSummary: function(){
        return `${this.title} was written by 
        ${this.author} in ${this.year}`
    }
}

// console.log(book1.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));



