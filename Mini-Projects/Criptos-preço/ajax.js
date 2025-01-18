const form = document.querySelector('.form')
const send = document.getElementById('send')

send.onclick = (e) => {
    e.preventDefault()
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3000/projetosVariados/PedraPapel&Tesoura/CriptoPriceAjax/api/getCoin.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText)
                if (data) {
                    console.log(data, 'estou no Data');

                    const priceContainer = document.getElementById('price');
                    priceContainer.textContent = 'Carregando...';
                    setTimeout(() => {
                        if (data.price) {
                            priceContainer.innerHTML = `O preço de <strong>${data.coin}</strong> é: $${data.price}`;
                        } else {
                            priceContainer.textContent = 'Não foi possível obter o preço.';
                        }
                    }, 800)

                } else {
                    console.log(data);
                }
            } else {
                console.log('Error');
            }
        }
    }
    let formData = form.coin.value

    xhr.send(JSON.stringify(formData))
}


function apiLoadData() {
    const select1 = document.querySelector('#select1');

    // console.log(select);
    let cont = 0
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/projetosVariados/PedraPapel&Tesoura/CriptoPriceAjax/api/vailableCoins.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.response);
                let dataArr = data.slice(0, 150)
                dataArr.forEach((coin, index) => {
                    const opt = document.createElement('option');
                    opt.classList.add('dropdown-option', 'input1')
                    opt.innerHTML = coin
                    select1.appendChild(opt)
                });

            }
        } else {
            console.log('error');
        }
    }
    xhr.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
    xhr.send();
}

apiLoadData()