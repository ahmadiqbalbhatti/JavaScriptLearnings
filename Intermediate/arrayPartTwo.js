// function osEven(element) {
//     // if (element % 2 === 0){
//     //     return true;
//     // }
//     //
//     // return false;
//
//     return element % 2 === 0
// }
//
// console.log(osEven(9))

var isEven = (element) => {
    return element % 2 === 0;
}

// console.log(isEven(9))


// var result = [2, 4, 5, 6, 8].every(isEven);
// console.log(result);

//
// var result = [2, 4, 5, 6, 8].every((element) => {
//     return element % 2 === 0;
// });

// to write the above statement in one line we don't use braces
var result = [2, 4, 5, 6, 8].every((element) => (element % 2 === 0));


console.log(result);

