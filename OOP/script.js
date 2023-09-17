'use strict';
// ----------------------------------------------------------------------------------------------------
// The 4 fundamentals of OOP Principle (Classical OOP: CLASSES)
// 1 - Abstraction: Ignore or hide details that don't matter.
// 2 - Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the class.
// 3 - Inheritance: Used when there are most things common in two class. Like Admin and User.
// 4 - Polymorphism: A child class can overwrite a method it inherited from a parent class. It depends on Inheritance as of my Knowledge.
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// OOP in JavaScript : PROTOTYPES
// Prototype => Object.
// Prototype contains methods and properties.
// -----
// Prototypal Inheritance: The prototype contains methods (behavior) that are accessible to all objects linked to that prototype.
// -----
// 3 Ways of Implementing Prototypal Inheritance in JS
// 1. Constructor Functions
// 2. ES6 Classes
// 3. Object.creat()
// ----------------------------------------------------------------------------------------------------

//********************************************************************************************************
// 1. Constructor Functions
//********************************************************************************************************
const Person = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Tip: Don't define function inside of constructor function

    // this.calcAge = function (){
    //     console.log(2038 - this.birthYear )
    // }
}

const  Ahmad = new Person("Ahmad Iqbal", 2001);
const  Iqbal = new Person("Iqbal", 2011);

// console.log(Ahmad)
//
// console.log(Ahmad instanceof Person)

// Prototypes

console.log(Person.prototype);

console.log(Ahmad)
Person.prototype.calcAge = function (){
    console.log(2037 - this.birthYear)
}

Ahmad.calcAge();
Iqbal.calcAge();

console.log(Ahmad.__proto__);
console.log(Iqbal.__proto__);
console.log(Ahmad.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Ahmad))
console.log(Person.prototype.isPrototypeOf(Iqbal))
console.log(Person.prototype.isPrototypeOf(Person))

// The above line shows that the prototype of Person is not linked with Person but the Objects created with it.
// In simple words, prototype works with linked Objects with actual object i.e. Person in case of Ahmad and Iqbal.

Person.prototype.species = 'Homo Sapiens';

console.log(Ahmad.species);

console.log(Ahmad.hasOwnProperty('firstName'))
console.log(Ahmad.hasOwnProperty('species'))

// console.log(Ahmad.__proto__.calcAge())


// Object Create method for using prototypal

const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}


const iqbal = Object.create(PersonProto);
console.log(iqbal)

iqbal.name = "Iqbal B";
iqbal.birthYear = 2001;

iqbal.calcAge();


console.log(iqbal.__proto__);

const ali = Object.create(PersonProto);
ali.init('Ali afzal', 1980);
ali.calcAge();

