const ajax = obj => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true)
        xhr.send()
        
        xhr.addEventListener('load', (e)=> {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText)
            }
        });
    })
}


document.addEventListener('click', event => {
    const el = event.target
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        event.preventDefault()
        carregaPagina(el);
    }
})

async function carregaPagina(link){
    const href = link.getAttribute('href');
    const response = await fetch(href)

    if(response.status !== 200) throw new Error('ERRO 404!')

    const html = await response.text();
    carregaResultado(html)
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}


// por padrão já retorna uma promise
fetch('pagina1.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('Erro 404')
            //resposta.text = retorna outra promise
            return resposta.text()
    })
    .then(html => console.log(e))
    .catch(e => { console.error(e)}) 


