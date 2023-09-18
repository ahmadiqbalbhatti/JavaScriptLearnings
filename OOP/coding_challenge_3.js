const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function () {
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed}`)
}

Car.prototype.break = function () {
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed}`)
}


const EV = function (make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo){
    this.charge = chargeTo;
}

EV.prototype.accelerate = function (){
    this.speed += 20;
    this.charge = this.charge - (this.charge * 0.01);
    console.log(`'${this.make}' going at ${this.speed}, with a charge of ${this.charge}%.`);
}

const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();
tesla.break();

tesla.chargeBattery(90);
tesla.accelerate();
