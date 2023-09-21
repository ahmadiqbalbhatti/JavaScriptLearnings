// Inheritance for functional OOP in JS

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }
//
// Person.prototype.calcAge = function () {
//     console.log(2034 - this.birthYear);
// }
//
// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear)
//     this.course = course;
// }
//
// Student.prototype = Object.create(Person.prototype);
//
// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and study in ${this.course}`);
// }
//
// const mike = new Student('Mike', 2020, 'Computer Science');
// // console.log(mike)
// mike.introduce();
// mike.calcAge();
//
// console.log(Person)
//
//
// console.log(mike.__proto__)
// console.log(mike.__proto__.__proto__);
//
// Student.prototype.constructor = Student;
//
// console.dir(Student.prototype.constructor)


// ES6 Classes and Inheritance

const { PersonCl } = require("./es6_classes.js");

class StudentCl extends PersonCl{
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and study in ${this.course}`);
    }
}

const martha = new StudentCl('Martha Jones', 2001, 'Computer Science');

martha.introduce();
martha.calcAge();


