var name = 'Ahmad';
console.log('Line Number 2', name);

function sayName() {
    var name = 'Mr. AIB';
    console.log("line number 6", name);
    sayNameTwo();

    function sayNameTwo() {
        var name = 'Mr. M.Zafar';
        console.log("line number 11", name);
    }

}


sayName();