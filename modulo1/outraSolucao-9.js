const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi(){
    const li = document.createElement('li');
    return li
}

// pega a tecla pressionada no navegador
inputTarefa.addEventListener('keypress', function(e){
    // pega o código da tecla pressionada
   if(e.keyCode == 13){
    if(!inputTarefa.value) return;
     criaTarefa(inputTarefa.value);
   }
});

function limpaInput(textoInput){
    inputTarefa.value = '';
    // foucus limpa o campo de input
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    // adiciona class a tag. neste caso criada com appendchild
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criarLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}


btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});


document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        //remove a classe pai de ' classe apagar'
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDetarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        // remove espaços finais dos itens do array
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDetarefas.push(tarefaTexto)
    }
    
    const tarefasJSON = JSON.stringify(listaDetarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    
}
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDetarefas = JSON.parse(tarefas)
    
    for(let tarefa of listaDetarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();