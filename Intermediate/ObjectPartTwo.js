var user = {
    firstName: "Ahmad",
    lastName: "Iqbal Bhatti",
    role: "Admin",
    age: 21,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);

    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    userInfo: function () {
        console.log(`First Name = ${this.firstName}`);
        console.log(`Last Name = ${this.lastName}`);
        console.log(`User Role = ${this.role}`);
        console.log(`User Age = ${this.age}`);
        console.log(`User FB Signed In = ${this.facebookSignedIn}`);
        console.log(`Course List = ${this.courseList}`);
    }
};

console.log(user.getCourseCount());
user.buyCourse("React Js")
user.buyCourse("React Js")
console.log(user.getCourseCount())

console.log(user.userInfo());
