class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed +=10;
        console.log(`${this.make} is going at ${this.speed}`)
    }

    break(){
        this.speed -=5;
        console.log(`${this.make} is going at ${this.speed}`)
    }

    get speedUS(){
        return this.speed / 1.6;
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}


const bmw = new CarCl("BMW", 110);

// bmw.accelerate();
// bmw.accelerate();
// bmw.break();
// bmw.break()
// bmw.break()
// bmw.break()
// bmw.break()
// bmw.accelerate();
console.log(bmw.speedUS)
bmw.speedUS = 50;
// bmw.accelerate();
console.log(bmw)
