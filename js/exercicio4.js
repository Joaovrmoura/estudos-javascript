
function encontraDia(data) {
    switch (data) {
        case 0:
            diaSemana = 'domingo';
            return diaSemana;
        case 1:
            diaSemana ='segunda';
            return diaSemana;
        case 2:
            diaSemana = 'terca';
            return diaSemana;
        case 3:
            diaSemana = 'quarta';
            return diaSemana;
        case 4:
            diaSemana = 'quinta';
            return diaSemana;
        case 5:
            diaSemana = 'sexta';
            return diaSemana;
        case 6:
            diaSemana = 'sabado';
            return diaSemana;
    }
}

function encontraMes(data) {
    switch (data) {
        case 0:
            mes = 'janeiro';
            return mes;
        case 1:
            mes ='feverero';
            return mes;
        case 2:
            mes = 'março';
            return mes;
        case 3:
            mes = 'abril';
            return mes;
        case 4:
            mes = 'maio';
            return mes;
        case 5:
            mes = 'junho';
            return mes;
        case 6:
            mes = 'julho';
            return mes;
        case 7:
            mes = 'agosto';
            return mes;
        case 8:
            mes = 'setembro';
            return mes;
        case 9:
            mes = 'outubro';
            return mes;
        case 10:
            mes = 'novembro';
            return mes;
        case 11:
            mes = 'desembro';
            return mes;
    }
}


function formata(data){
    let nomeDoMes = data.getMonth();
    let numSemana = data.getDay();
    let dia = data.getDate();
    let ano = data.getFullYear();
    let hora = data.getHours()
    let min = data.getMinutes();
    let mesAno = encontraMes(nomeDoMes);
    let NomeDoDia = encontraDia(numSemana);

    return `${NomeDoDia}, ${dia} de ${mesAno} de ${ano}, ${hora}:${min}`
}

///////////////////////// FORMA SIMPLES DE SE FAZER ////////////////////////

const data = new Date();
const dataFormatada = formata(data);

const showData = document.querySelector('.container p');
showData.innerHTML += `${dataFormatada}<br>`;
console.log(showData)

showData.innerHTML += data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'}); 

// console.log(NomeDoDia)