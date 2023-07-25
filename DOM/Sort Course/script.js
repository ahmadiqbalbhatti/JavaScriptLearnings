const courses = [
    {
        name: "Complete React JS course",
        price: "5.4"
    },
    {
        name: "Complete Angular JS course",
        price: "2.4"
    },
    {
        name: "Complete MERN course",
        price: "3.4"
    },
    {
        name: "Complete DSA Using JS course",
        price: "2.8"
    },
];


function generateList() {

    let ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach(course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

generateList();
// window.addEventListener("load", generateList);


const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort((a, b) => {
        return (a.price - b.price);
    });
    generateList();
});
