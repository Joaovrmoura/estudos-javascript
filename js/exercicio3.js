
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

const data = new Date('1987-11-24 00:00:00');
let diaSemana = data.getDay();

const nome_dia = encontraDia(diaSemana);
console.log(nome_dia, diaSemana)