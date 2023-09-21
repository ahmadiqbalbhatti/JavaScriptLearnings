class CarCl{
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed;
        console.log(`${this.make} is going at ${this.speed}`)
        return this;
    }

    break(){
        this.speed -=5;
        console.log(`${this.make} is going at ${this.speed}`)
        return this;
    }
}


class EVCl extends CarCl{
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);

        this.#charge = charge;
    }

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this;
    }

    accelerate (){
        this.speed += 10;
        this.#charge = this.#charge - (this.#charge * 0.01);
        console.log(`'${this.make}' going at ${this.speed}, with a charge of ${this.#charge}%.`);
        return this;
    }

}


// const car = new CarCl('Tesla', 120);

//
// const EV = function (make, speed, charge){
//     Car.call(this, make, speed);
//     this.charge = charge;
// }
//
// EV.prototype = Object.create(Car.prototype);
//
// EV.prototype.chargeBattery = function (chargeTo){
//     this.charge = chargeTo;
// }
//
// EV.prototype.accelerate = function (){
//     this.speed += 20;
//     this.charge = this.charge - (this.charge * 0.01);
//     console.log(`'${this.make}' going at ${this.speed}, with a charge of ${this.charge}%.`);
// }
//
const tesla = new EVCl('Tesla', 120, 23);

console.log(tesla)
tesla.accelerate().break();
tesla.break();

tesla.chargeBattery(90);
tesla.accelerate();
