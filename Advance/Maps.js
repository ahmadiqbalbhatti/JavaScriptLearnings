const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

for (const fruit of fruits.keys()) {
    console.log(fruit)
}

fruits.forEach((value) => console.log(value));
fruits.delete("apples")
console.log(fruits)
