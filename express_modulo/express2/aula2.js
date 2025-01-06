const express = require('express');
const app = express(); 
// importando as rotas da aplicação
const routes = require('./routes')

app.use(express.urlencoded({extended : true}))
// faz o javascript usar as rotas
app.use(routes)

// preciso da porta do servidor!
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});