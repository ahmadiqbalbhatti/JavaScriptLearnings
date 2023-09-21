class Account{
    // Public Fileds
    // locale = navigator.language;

    // Private Fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency =currency;
        this.#pin = pin;
        // this._movements = [];
        // this.local = navigator.language;

        console.log(`Thanks for opeening an account ${owner}`)
    }

    // Public Interface

    getPin(){
        return this._pin;
    }
    getMovements(){
        return this.#movements;
    }
    deposit(val){
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.#movements.push(-val);
        return this;
    }

    _approveLoan(val){
        return true;
    }
    requestLoad(val){
        if (this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan Approved`)
            return this;
        }
    }
}

const acc1 = new Account('Ahmed ', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(55);
acc1.requestLoad(10000);

console.log(acc1)
// console.log(acc1.getMovements() )

// Chaining
acc1.deposit(300).deposit(500).deposit(300).withdraw(430).deposit(500);
console.log(acc1.getMovements())
