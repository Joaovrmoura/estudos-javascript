const _speed = Symbol('speed')
class Carro{
    constructor(name){
        this.name = name;
        this[_speed] = 0;
    }

    set speed(value){
        if(typeof value !=  'number') return
        if(value >= 100 || value <= 0) return
        this[_speed] = value
    }

    get speed(){
        return this[_speed];
    }
    accelerate(){
        if(this[_speed] >= 100) return
        this[_speed]++
    }
     brake(){
        if(this[_speed] <= 0) return
        this[_speed]--
     }

}

c1 = new Carro('fusca')

// for(let i = 0; i <= 120; i++){
//     c1.accelerate()
// }

c1.speed = 10
console.log(c1.speed);
