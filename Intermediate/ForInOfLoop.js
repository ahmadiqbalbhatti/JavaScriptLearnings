const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"];
for (const name of names) {
    console.log(name);
}


const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    a: "Amazon",
    fb: "Facebook",
}

for (const symbolsKey in symbols) {
    console.log(`Key is: ${symbolsKey} and Value is : ${symbols[symbolsKey]}`);
}