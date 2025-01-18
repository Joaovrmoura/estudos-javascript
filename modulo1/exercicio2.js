const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let peso = form.querySelector('#peso').value;
    let altura = form.querySelector('#altura').value;
    const imc = peso / (altura * altura);

    peso = Number.parseInt(peso);
    altura = Number.parseFloat(altura);

    function criarParagrafo() {
        const p = document.createElement('p');
        return p;
    }
    
    function exibirMessage(msg, isValid) {
        const resultado = document.querySelector('#result');
        resultado.innerHTML = '';

        const paragrafo = criarParagrafo();
        if (isValid) {
            paragrafo.classList.add('show-result');
        } else {
            paragrafo.classList.add('show-erro');
        }
        paragrafo.innerHTML = msg;
        resultado.appendChild(paragrafo);
    }
   
    function nivelImc(imc) {
        niveis = ['abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1',
            'Obesidade Grau 2', 'Obesidade Grau 3']

        if (imc < 18.5) return niveis[0];
        if (imc > 18.5 && imc < 24.9) return niveis[1];
        if (imc > 25 && imc < 29.9) return niveis[2];
        if (imc > 30 && imc < 34.9) return niveis[3];
        if (imc > 35 && imc < 39.9) return niveis[4];
        if (imc > 40) return niveis[5];
    }

    if (isNaN(altura) || isNaN(peso)) {
        exibirMessage('Preenhca todos os campos com numeros', false);
        return;
    }
    if (altura <= 0 || altura >= 3) {
        exibirMessage('altura de ser em metros. Exemplo : 1.77', false);
        return;
    }
    if (peso <= 0) {
        exibirMessage('Peso deve ser maior do que zero', false);
        return;
    }

    const nivel = nivelImc(imc);
    exibirMessage(`Seu imc É: ${imc.toFixed(2)} <br> Condição: (${nivel})`, true);

});
