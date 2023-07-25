// // there are two types of context
// // 1. Global Context
// // 2. Execution Context
//
// // 1. Global Context
// // the global context is collecting information of everything about everything
//
// var num = 2;
//
// function sayMe() {
//     console.log("Say MR")
// }
//
//
// // 2. Execution Context ( The context that is running right now)
//
// // Execution context consists of
// // Variable Object, Scope Chain, This
//
// // Here are some roles of Execution of Code:
// // - Function declarations are scanned and made available
// // - Variable declarations are scanned and made undefined
// sayMe();
//
//

tipper("80")

function tipper(a) {
    var bill = parseInt(a);

    console.log(bill + 5);

}


var bigTipper = (a) =>{
    var bill = parseInt(a);

    console.log(bill + 15);
}

bigTipper(200)

// the above two block of code shows that if a function is stored in a variable then it will not run as actual function
// that starts with the keyword FUNCTION
// name = "I love you";

console.log(name) //  this will give output of undefined
var name = "Ahmad";
console.log(name) //  this will give output of store name i.e: Ahmad


function syaName(){
    var name = "Mr. AIB";
    console.log(name);
}

syaName();


console.log(name)
