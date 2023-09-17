class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Benefit of using Class is, it automatically add functions and properties to the prototype object.
    calcAge(){
        console.log(2037 - this.birthYear);
    }

    get age(){
        return 2037 - this.birthYear;
    }

    set fullName(name){
        console.log(name)
        if (name.includes(" ")){
            this._fullName = name;
        } else {
            console.log(`${name} is not a full Name`)
        }
    }
    get fullName(){
        return this._fullName;
    }

    static hey(myLove){
        console.log("Hello here! " + myLove + ".")
    }
}

PersonCl.hey("Eman");

const ahmad = new PersonCl('Ahmad', 2001);

// console.log(ahmad.fullName)
ahmad.calcAge();
console.log(ahmad.age)

ahmad.fullName = "Ahmad Iqbal Bhatti";
console.log(ahmad.fullName)

// const account = {
//     owner: 'Ahmad',
//     movements: [299, 435, 234,123],
//
//     get latest(){
//         return this.movements.slice(-1).pop();
//     },
//
//     set latest(mov){
//         this.movements.push(mov);
//     }
// }
// account.latest = 234;
// console.log(account.latest)
