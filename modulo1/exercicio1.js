const send = document.getElementById('send');
const array = []

send.onclick = function () {
    const form = document.querySelector('.form');
    const result = document.getElementById('result');
    
    form.onsubmit = function (evento) {
        // Impede que a página atualize
        evento.preventDefault();
        const nome = document.getElementById('nome');
        const peso = document.getElementById('peso');
        const sobrenome = document.getElementById('sobrenome');
        const altura = document.getElementById('altura');
    }
    array.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });

    console.log(array);
    result.innerHTML += `Nome: ${nome.value} <br>`;
    result.innerHTML += `Sobrenome: ${sobrenome.value} <br>`;
    result.innerHTML += `Peso: ${peso.value} <br>`;
    result.innerHTML += `Altura: ${altura.value} <br>`;


}

