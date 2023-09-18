// Inheritance for functional OOP in JS

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2034 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear)
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and study in ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike)
mike.introduce();
mike.calcAge();

console.log(Person)


console.log(mike.__proto__)
console.log(mike.__proto__.__proto__);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor)


// ES6 Classes and Inheritance

