// most people called foreach as a loop but it is not loop its a method

const myStates = [
    "Punjab",
    "Sindh",
    1947,
    "Islamabad",
    "Baluchistan"
]

myStates.forEach((element) => (console.log(element)))
myStates.forEach((element) => (
    typeof element !== "string" ? console.log("IT was number") : console.log(element)
));