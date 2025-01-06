const container = document.querySelector('.container')
const listaDeTarefas = []

const send = document.querySelector('.enviar')
let tarefas;


send.onclick = (e) => {
    const form = document.querySelector('.form')   
    const btnApagar = document.createElement('button')
    const lista = document.createElement('li');
    const tarefa = document.getElementById('tarefa');

    btnApagar.innerHTML = 'apagar'

    function implementaTag(tagPai, tagFilho, tarefa){
        if(tarefa.length <= 0) return false;
        return tagPai.appendChild(tagFilho)
    }

    function mostarListas(lista, tag){
        if(lista.length <= 0) return false
        for(i in lista){
            tag.innerHTML = `${lista[i]} `;
            console.log(lista[i]);
        }
    }
    
    function adicionartarefas(tarefa){
        if(tarefa.length <= 0) return
        listaDeTarefas.push(tarefa)
        return listaDeTarefas;
    }
        
    function apagarTarefas(){
        listaDeTarefas.shift()
        container.removeChild(lista)
    } 

    form.onsubmit = (evento) =>{
        evento.preventDefault();
        tarefas = tarefa.value;

        adicionartarefas(tarefas)
        // lista.innerHTML += `${tarefas} `
        mostarListas(listaDeTarefas, lista)
        
        implementaTag(container, lista, tarefas)
        implementaTag(lista, btnApagar, tarefas)
        
    }    

    btnApagar.onclick = (e) =>{
        apagarTarefas(tarefas, lista)
    }

   
}


