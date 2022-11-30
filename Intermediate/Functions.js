// function sayHello(name){
//     console.log("Hello there, Ahmad");
//     // console.log("Hello there, ", name);
//     console.log(`Hello there, ${name}. How are you?`)
// }
//
// // sayHello("Zafar Iqbal");
//
// function greating(){
//     return "Asslam O Aliykum";
// }
//
// var greatings = greating();
//
// console.log(greating());
// function getUserRole(name, role){
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all Access`;
//         case "subAdmin":
//             return `${name} is Sub Admin with all Access to create/Delete`;
//         case "testprep":
//             return `${name} is test prep with all Access to create/Delete`;
//         case "user":
//             return `${name} is a User who have access to consume content and learn programming`;
//         default:
//             return `${ name} is a trial user`
//     }
// }

// var getUserRole = function (name, role){
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all Access`;
//         case "subAdmin":
//             return `${name} is Sub Admin with all Access to create/Delete`;
//         case "testprep":
//             return `${name} is test prep with all Access to create/Delete`;
//         case "user":
//             return `${name} is a User who have access to consume content and learn programming`;
//         default:
//             return `${ name} is a trial user`
//     }
// }

var getUserRole = (name, role) => {
    switch (role) {
        case "admin":
            return `${name} is admin with all Acces s`;
        case "subAdmin":
            return `${name} is Sub Admin with all Access to create/Delete`;
        case "testprep":
            return `${name} is test prep with all Access to create/Delete`;
        case "user":
            return `${name} is a User who have access to consume content and learn programming`;
        default:
            return `${name} is a trial user`
    }
}


// console.log(getUserRole("AHmad Iqbal", "testprep"));
var getRole = getUserRole("Ahmad", "user")
console.log(getRole)