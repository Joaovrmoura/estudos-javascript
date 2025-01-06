// XMLHttpRequest usado para requisição de dados
const ajax = obj => {
    return new Promise((resolve, reject) =>{
        // xhr(usado por convenção) que representa XMLHttpRequest
        const xhr = new XMLHttpRequest();
        // sincrono ou assincrono no final, true ou false
        xhr.open(obj.method, obj.url, true)
        // xhr.send() se fosse post;
        xhr.send()
        
        // resposta do servidor
        xhr.addEventListener('load', (e)=> {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText)
            }
        });
    })
}
// pego todos os clicks da página
document.addEventListener('click', event => {
    // atribuo os ... a uma variável
    const el = event.target
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        event.preventDefault()
        carregaPagina(el);
    }
})

async function carregaPagina(link){
    const href = link.getAttribute('href');
    const objConfig = {
        method : 'GET', 
        url : href, 
    };
    try{
        const response = await ajax(objConfig);
        carregaResultado(response)
    }catch(e){
        console.log(e);
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}