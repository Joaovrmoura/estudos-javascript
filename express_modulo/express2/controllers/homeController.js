// exportando esse item para o arquivos de routes
exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome">
            Email: <input type="text" name="email">
            <button type="submit">Enviar</button>
        </form>`
    );
}
exports.trataPost = (req, res) =>{
    req.send('Nova rota de posts')
}