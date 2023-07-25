const ahmad = {
    firstName: "Ahmad",
    lastName: "Iqbal Bhatti",
    role: "student",
    courseCount: 2,
    getInfo: function () {
        console.log(`First name is ${this.firstName}`);
        console.log(`Last name is ${this.lastName}`);
        console.log(`Role is ${this.role}`);
        console.log(`Course Count is ${this.courseCount}`);
    }
}

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "admin",
    courseCount: 4,
}

// ahmad.getInfo();
var djInfo = ahmad.getInfo.bind(dj);

// djInfo();
// ahmad.getInfo.call(dj);