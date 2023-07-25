var counter = document.querySelector(".counter");
console.log(counter.innerHTML)

var followers = document.querySelector(".followers");
console.log(followers.innerHTML);


let count = 1;
let followerShow = false;
setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerHTML = count;
    }
}, 1);


setTimeout(() => {
    followers.innerHTML = "followers in Instagram";
}, 4000)

