function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco
    
    //this referencia o prório objeto, configurar a propiedade estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostrar a chave
        value : estoque, // mostra o valor
        writable: true, //pode ou não alterar o valor(se for true pode)
        configurable: false // pode configurar a cahve(se for true)
    })
}

const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 50000
console.log(p1);
