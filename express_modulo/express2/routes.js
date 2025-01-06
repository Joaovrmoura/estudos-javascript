const express = require('express')
const route = express.Router();
// imnportando o módulo homeController
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')
// vai "roteamento, ele encontra a rota e vai chamar um controlador para aplicação"
// esse controlador vai decidir qual view ou model utilizar
// IGUAL NO PHP CLASS E MÉTODO 
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// rotas de contato
route.get('/contato', contatoController.paginaInicial)

// exporta route
module.exports = route