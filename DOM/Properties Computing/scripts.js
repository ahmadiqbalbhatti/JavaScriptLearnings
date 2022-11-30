var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");

var center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor)

const bgColor = (element) => {
    return window.getComputedStyle(element).backgroundColor;
}

// const elementColor = bgColor(cyan);
//
// cyan.addEventListener("mouseenter", () => {
//     center.style.background = elementColor;
//     console.log(center.style.background = elementColor);
// })

const colorChangingHandler = (element, elementColor) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = elementColor;
        // console.log(center.style.background = elementColor);
    })
}

colorChangingHandler(cyan, bgColor(cyan));
colorChangingHandler(red, bgColor(red));
colorChangingHandler(violet, bgColor(violet));
colorChangingHandler(orange, bgColor(orange));
colorChangingHandler(pink, bgColor(pink));