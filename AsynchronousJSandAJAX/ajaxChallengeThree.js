const imageContainer = document.querySelector('.images');

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    })
}
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');

        img.src = imgPath;

        img.addEventListener('load', function () {
            imageContainer.append(img)
            resolve(img)
        })

        img.addEventListener('error', function () {
            reject(new Error('Image Not Found'));
        })
    })
}

let currentImage = '';

const loadNPause = async function () {
    try {
        currentImage = await createImage("./img/img-1.jpg");
        console.log('Image 1 loaded');
        await wait(1);
        currentImage.style.display = 'none';

        currentImage = await createImage("./img/img-2.jpg");
        console.log('Image 2 loaded');
        await wait(2);
        currentImage.style.display = 'none';

        currentImage = await createImage("./img/img-3.jpg");
        console.log('Image 3 loaded');
        await wait(3);
        currentImage.style.display = 'none';


    } catch (err) {
        console.log(err)
    }

}

// loadNPause();

const imageArray = ['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']
const loadAll = async function (imageArray) {
    try {
        const  images = imageArray.map(async imageUrl => await createImage(imageUrl) )

       const imageElements = await Promise.all(images)
        console.log(imageElements)

        imageElements.forEach(img => img.classList.add('parallel'))
    } catch (err){
        console.log(err)
    }

}


loadAll(imageArray)
// createImage("./img/img-1.jpg")
//     .then(img => {
//         currentImage = img;
//         console.log('Image 1 loaded')
//         return wait(2);
//     })
//     .then(()=>{
//         currentImage.style.display = 'none';
//
//         return createImage('./img/img-2.jpg')
//     })
//     .then(img => {
//         currentImage = img;
//         console.log('Image 2 loaded')
//         return wait(2);
//     })
//     .then(()=>{
//         currentImage.style.display = 'none';
//
//         return createImage('./img/img-3.jpg')
//     })
//     .then(img => {
//         currentImage = img;
//         console.log('Image 3 loaded')
//         return wait(2);
//     })
//     .then(()=>{
//         currentImage.style.display = 'none';
//
//         // return createImage('./img/img-3.jpg')
//     })
//     .catch(err => console.log(err))
//
//
