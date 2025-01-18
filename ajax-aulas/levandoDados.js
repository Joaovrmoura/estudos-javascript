// LEVANDO OS DADOS DE UM FORMULÁRIO NO HTML PARA UM SCRIPT NO PHP EM FORMA DE OBJETO
const resultado = document.querySelector('.resultado');
const form = document.querySelector('#myForm');
const sendBtn = document.querySelector('.send')

form.onsubmit = (e) => {
    e.preventDefault(); 
}

// Quando o botão de enviar é clicado
sendBtn.onclick = () => {
    // Cria um novo objeto XMLHttpRequest para enviar dados via AJAX
    let xhr = new XMLHttpRequest(); 
    // Configura a requisição POST para o arquivo 'insert-chat.php'
    xhr.open("POST", "http://localhost/tests/get&post/getData.php", true); 
    
    // Define o que acontece quando a requisição estiver carregada
    xhr.onload = () => {
        // Verifica se a requisição foi completamente processada
        if(xhr.readyState === XMLHttpRequest.DONE){
            // Se o status for 200 (sucesso)
            if(xhr.status === 200){
                let data = JSON.parse(xhr.responseText)
                console.log(data);   
                // Exibir a resposta na div `.resultado`
                if (data.success) {
                    resultado.innerHTML = `<p style="color: green;">${data.message}</p>`;
                } else {
                    resultado.innerHTML = `<p style="color: red;">${data.message}</p>`;
                }
            }
        }
    }
    // Cria um objeto FormData com os dados do formulário para enviar ao servidor
    let formData = {
        nome: form.nome.value, // Pega o valor do campo 'nome'
        email: form.email.value, // Pega o valor do campo 'email'
        senha: form.senha.value // Pega o valor do campo 'senha'
    };
    // transforma o objeto com os valores
    //  do input do formulário em formato json
    xhr.send(JSON.stringify(formData)); 
}


