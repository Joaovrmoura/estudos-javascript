// Tratamento de erros m js try catch
// Resumindo try executa algo caso não tenha erros 
// pode parar ali("se não tiver finally")
// catch caso tenha levantado um'''''1sxa exceção com 
// throw new TipoDeErro('mensagem)
// retorna o TipoDeErro('mensagem) em uma variavel
// criada no parâmetro do catch

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== "number"){
        // Levantando exceção
        throw new ReferenceError('x e y devem ser tipo number')
    }
    return x + y;
}

try{
    console.log(soma('1', 3));
    console.log(soma(4, 9));
    
}catch(error){
    console.log('Trato erros');
    console.log('mais friendly');
}finally{
    // SEMPRE È EXECUTADO
    console.log('Sou util para fechar arquivos');
}

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('ESPERO INSTÂNCIA DE DATE');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit',
        hour12 : false
    });
}

try{
    const hora = retornaHora(20)
    // const data = new Date('01-01-1970 12:58:12');
    console.log(hora)
}catch(e){
    console.log(e);
}finally{
    console.log('Executei o catch');
}
