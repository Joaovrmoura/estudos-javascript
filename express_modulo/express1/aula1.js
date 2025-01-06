// require arquivo dentro de package.json
const express = require('express');
// conveção 
const app = express();

//trata as requisições do body
app.use(express.urlencoded({extended : true}))

// depois do ? inicia as query strings
// //perfis/id=232?CHAVE='VALORDAROTA'
// & separa outras chaves e

// http://meuSite.com.br
// pega a rota GET da minha aplicação EX: 
// requisiçaõ, pedido do usuario para acesso
// resposta é o retorno para o usuário
app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        Email: <input type="text" name="email">
        <button type="submit">Enviar</button>
        </form>`);
});
//query strings, req.params é = rota vindo depois do testes(podemos pegar seu valor),
// colocamos o ? para caso não exista parâmetro a mais na rota estes
// ele permanece em testes, pode ter parâmetros a mais exe : '/testes/:id12332?/:MaisParam?'
app.get('/testes/:id12332?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    // pegando algum parâmetro.nome_do_parâmetro(vindos da url) vêm em forma de obj
    res.send(req.query.nome)
})

// POSSO USAR DIFERENTES MÉTODOS HTTP NA MESMA ROTA
app.post('/', (req, res) => {
    console.log(req.body);
    // nome = name do input(igaul no php para receber valores de forms)
    res.send(`Oque foi enviado foi : ${req.body.nome}
            Seu email é : ${req.body.email}`);
})
app.get('/contacts', (req, res) => {
    res.send('<h1 style="font-size:90px;">Obrigado por entrar em contato</h1>');
})
// porta que está ouvindo os processos
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor está executando na porta 3000');
    
});
// para inciar o servidor, no terminal node nome_do_script.js
// npx nodemon + nome do arquivo que deve ser atualizado sem necessidade de
// fechar e abrir o servidor
// ou no package.json adicione em scripts um "start" : "nodemon nome_do_script".
//APÓS ISSO USE O COMANDO NPM START PARA INICIAR O SERVIDOR NA PORTA ESCOLHIDA
