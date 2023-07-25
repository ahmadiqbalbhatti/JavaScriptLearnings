// function init() {
//     var firstName = "Ahmad";
//
//     function sayFirstName() {
//         console.log(firstName);
//     }
//
//     return sayFirstName;
// }
//
// var firstName = init();
//
// firstName();

function doAddition(x) {
    return function (y) {
        return x + y;
    }
}

var add5 = doAddition(4);

console.log(add5(5));

console.log(`Sum of 4 and 5: `, doAddition(4)(5));
