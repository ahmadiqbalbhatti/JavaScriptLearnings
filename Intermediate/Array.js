var countries = ["Pakistan", "China", "USA", "Canada", "Australia"];

var states = new Array("Punjab", "Sindh", "Baluchistan")
// // var states = new Array(["Punjab", "Sindh", "Baluchistan"])
// //
// console.log(states[0]);
// console.log(states.length);
// states[0] = "Islamabad";
// console.log(states);

var user = ["Ahmad", "ahmad@gmail.com", 3, 24, true];
// console.log(user);

user.pop();
// console.log(user);

user.unshift("New Value");
// console.log(user);
user.shift();

console.log(user.indexOf(3));

console.log(Array.from(user[1]))
