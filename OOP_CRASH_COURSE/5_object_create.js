// Object of protos
const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} years Old`
    }
}

// Create Object
const book1 = Object.create(bookProtos, {
    title : {value : "Book One"},
    year : {value : "1996"},
    author: { value: "josh"},
});



console.log(book1);
