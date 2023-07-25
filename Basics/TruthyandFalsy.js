// undefined
// null
// 0
// +
// ''
// NaN
//


// if values are falsy values means any from above will be considered as false
// var user;
//
// console.log(user)
//
// user = null; // null values are treated as false values
// console.log(user)

console.log("2" + 2);
console.log(2 + 2);

var user = "2";

// as we are using double equal to, in js it will not compare string with numbers, soo it will return true and run the block of code
// if (2 == user){
//     console.log("Condition is True");
// }

// in this case: using three equal tos, we force js to strictly check if it is really equal to number 2 or not
// in simple word triple equal is used to check whether it is equal or not and also it checks the type of the variable
if (2 === user) {
    console.log("Condition is True");
}

