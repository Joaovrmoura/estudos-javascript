
fetch('pessoas.json')
    .then(response => response.json())
    .then(json => carregaElementos(json))

// axios('pessoas.json').then(json => carregaElementos(json.data))


function carregaElementos(json){
    const container = document.querySelector('.container')
    const tabela = document.createElement('table')
    
    for(let pessoa of json){
        const tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = `  idade: ${pessoa.idade} `
        tr.appendChild(td)
        
        td = document.createElement('td')
        td.innerHTML = `Salário: ${pessoa.salario} `
        tr.appendChild(td)

        tabela.appendChild(tr)
    }

    container.appendChild(tabela)
}
