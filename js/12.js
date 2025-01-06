const pessoa = {
    nome : 'joao', 
    sobrenome : 'odrigues',
    idade : 25,
    endereco : {
        rua : 'avenida sububana', 
        numero : 544
    }
};

// Outra forma de acessar uma chave de um objeto
console.log(pessoa['nome']);

// Atribuição via destruturação

// extrai do objeto a chave com o nome da variavel, 
// e cria uma variavel nova com essa chave
// const { nome 7} = pessoa;
// caso não exista preenche valor
const { sobrenome = 'caso não exista' } = pessoa;
// mudando o nome da variavel idade para teste. 
// O valor não muda
const { idade : teste= ''  } = pessoa;

// Extraindo valores dentro do objeto endereco
// a variavel endereco não existe, só rua e numero
// se adicionar , endereco eu pego e endereco completo
const { endereco : {rua, numero}/*, endereco */} = pessoa;
console.log(rua, numero);
console.log(sobrenome);
console.log(teste);

console.log();

// REST, pegando o resto das innformações
const {nome, ...resto} = pessoa;
console.log(resto);
