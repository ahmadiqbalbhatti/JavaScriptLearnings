var User = function (firstName, courseCounts) {
    this.firstName = firstName;
    this.courseCounts = courseCounts;
    this.getCourseCount = function () {
        console.log(`Course Count ${this.courseCounts}`);
    };
};

User.prototype.getFirstName = function () {
    console.log(`Your firstName is : ${this.firstName}`);
}

var ahmad = new User("Ahmad", 2);
ahmad.getCourseCount();
if (ahmad.hasOwnProperty("firstName")) {
    ahmad.getFirstName();
}

// console.log(ahmad);


var iqbal = new User("Iqbal", 5);
iqbal.getCourseCount();
iqbal.getFirstName();
// console.log(iqbal);