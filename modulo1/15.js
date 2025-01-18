function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1
const max = 50
let randomizar = 10;
console.log(randomizar);

// usar o while quando não sabemos exatamente 
// quando vamos parar
do{
    randomizar = random(min, max);
    if(randomizar == 5 || randomizar == 25){
        console.log('pulei o 5 ou o 10');
        continue;
    }
    console.log(randomizar);
    if(randomizar == 7){
        console.log('sai do laço');
        break
    }
}while(randomizar !== 10);