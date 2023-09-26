'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//


const renderCountry = (data, className = "") => {
    let languages = '';
    let currency = '';
    let html = '';

    data.forEach(item => {
        const langKeys = (item.languages && typeof item.languages === 'object') ? Object.keys(item.languages).slice(0, 2) : [];
        console.log(langKeys)
        languages = "";
        for (const langKey of langKeys) {
            languages += item.languages[langKey] + (langKeys.length > 1 ? " | " : "")
        }

        for (const itemKey in item.currencies) {
            currency = item.currencies[itemKey].name;
        }

        html += `
        <article class ="country ${className}">
            <img class="country__img" src="${item.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${item.name.common}</h3>
                <h4 class="country__region">${item.region}</h4>
                <p class="country__row"><span>👫</span>${(+item.population / 1000000).toFixed(1)} <strong>M</strong></p>

                <p class="country__row"><span>🗣️</span>${languages}</p>
                <p class="country__row"><span>💰</span>${currency}</p>
            </div>
        </article>
        `
    })


    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
}

// export {renderCountry};


const renderErrorMessage = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}

//
// const getCountryAndNeighbour = (countryName) => {
//
//     // Ajax Call 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//
//     request.send()
//
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.responseText);
//
//         console.log(data)
//
//         // Render Country
//         renderCountry(data);
//
//         // Render neighbour Country
//         const [neighbour] = data[0].borders;
//         console.log(neighbour)
//
//         if (!neighbour) return;
//
//         // Ajax Call 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//
//         request2.send()
//
//         request2.addEventListener('load', function (){
//             const data2 = JSON.parse(request2.responseText);
//             renderCountry(data2, 'neighbour');
//         })
//
//
//
//
//     })
//
// }
//
// getCountryAndNeighbour('pakistan')
// getCountryAndNeighbour('usa')
// // getCountryAndNeighbour('portugal')


//////////////////////////////////////////////////////////////////////////


//
// const getCountryData = (countryName) => {
//     fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//         .then((response) =>{
//             console.log(response)
//
//             if (!response.ok){
//                 throw new Error(`Country not Found ( ${response.status} )`)
//             }
//
//             return  response.json();
//         })
//         .then((data) => {
//             renderCountry(data)
//             const neighbour = data[0].borders[0];
//             if (!neighbour) return;
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//             // return fetch(`https://restcountries.com/v3.1/alpha/asdf`)
//
//         })
//         .then(response =>{
//             console.log(response)
//
//             if (!response.ok){
//                 throw new Error(`Border Country not Found ( ${response.status} )`)
//             }
//             return  response.json();
//         })
//         .then(data => renderCountry(data, "neighbour"))
//         .catch(err => {
//             console.log(`${err}`)
//             renderErrorMessage("Something went wrong " + err)
//         })
//         .finally(()=>{ // Finally is used on promises return
//             countriesContainer.style.opacity = 1;
//         })
// }
//


// Reusable fetch function with error handling
const fetchData = (url) => {
    // Use return to return the json response from channing.
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`${response.status} - ${response.statusText}`);
            }
            return response.json();
        });
};

// Error handling function
const handleError = (error) => {
    console.error(error);
    renderErrorMessage("Something went wrong: " + error.message);
};

const getCountryData = (countryName) => {
    fetchData(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((data) => {
            renderCountry(data);
            const neighbour = data[0].borders[0];
            if (!neighbour) return;
            return fetchData(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        .then((neighbourData) => {
            renderCountry(neighbourData, "neighbour");
        })
        .catch(handleError)
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};


btn.addEventListener('click', function () {
    getCountryData('pakistan')
})

//
// console.log('Test Start for Runtime Browser');
//
// setTimeout(()=>{
//     console.log("0 sec timer")
// }, 0)
//
//
// Promise.resolve('Resolved Promise 1').then(res => console.log(res));
//
//
// Promise.resolve("Resolved promise 2"   ).then(res => {
//     for (let i = 0; i < 5000; i++) {
//         console.log(res)
//     }
// });
// console.log('Test End for Runtime Browser');

//
// const lotteryPromise = new Promise(function (resolve, reject){
//
//     console.log('Lotter Draw is Happening');
//
//     setTimeout(function (){
//         if (Math.random() >= 0.5){
//             resolve("You Win $$$");
//         }
//         else{
//             reject("You Lost you money $$");
//         }
//     }, 2000)
//
// });


//  Promisifying setTime Ou
// const wait = function (seconds) {
//     return new Promise(function (resolve, reject){
//         setTimeout(resolve, seconds * 100);
//     })
// }
//
// wait(2).then(() =>{
//     console.log('I waited for 2 Sections')
//     return wait(1);
// })
//     .then(()=> console.log('I waited for 1 Second'));
//
// lotteryPromise.then(res => console.log(res)).catch(error => console.error(error));
//
//
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject('abc').catch(x => console.error(x))


// navigator.geolocation.getCurrentPosition(position => console.log(position)), err => console.log(err)

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position)),
        //     err => reject(err)

        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

// const whereAmI = function (){
//     return fetch(`https://geocode.xyz/32,12?geoit=json&auth=96197725910685815644x47362`)
//         .then(res => {
//             if (!res.ok){
//                 throw new Error(`Problem with geocoding ${res.status}`)
//             }
//             return res.json();
//         })
//         .then(data =>{
//             console.log(`You are in ${data.standard.city}, ${ data.standard.region}`)
//         })
//         .catch(handleError)
// }
//
// console.log(whereAmI())

//
// const whereAmI = () => {
//     let lat, lng;
//     getPosition().then(pos => {
//         const {latitude: lat, longitude:lng} = pos.coords;
//     })
//
//
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=96197725910685815644x47362`, )
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`${response.st} - ${response.state}`)
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(`You are in ${data.region}.`)
//             console.log(`You are in ${data.country}.`)
//             return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//         })
//         .then(data  => {
//             renderCountry(data)
//         })
//         .catch(handleError)
// }
//
//
// // whereAmI();
// btn.addEventListener('click', whereAmI.bind(this))


// Async and Await way of using promises is easier than all the abvoe.

const whereAmI = async function () {
    try {
        // console.log(getPosition())
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;


        const responseGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=96197725910685815644x47362`);
        if (!responseGeo.ok) throw new Error("Problem getting location data");

        const dataGeo = await responseGeo.json();

        console.log(dataGeo.country)

        const response = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`)
        // const response = await fetch(`https://restcountries.com/v3.1/name/asdf`)
        if (!response.ok) throw new Error("Problem getting country data");

        const data = await response.json();

        renderCountry(data)
        countriesContainer.style.opacity = 1;

        return `You are in ${dataGeo.city}, ${dataGeo.country}`;

    } catch (err) {
        // console.log(err.message)
        renderErrorMessage(err.message)

        // Reject Promise returned from Async function
        throw err; // rethrowing error
    }

}

// (async () => {
//     try {
//         const city = await whereAmI();
//         console.log(`2: ${city}`)
//     } catch (err) {
//
//         console.log('3: Finishing getting location')
//     }
//     console.log('3: Finishing getting location')
// })();
//
// console.log('1: will get location')

// const city = whereAmI();
// console.log(city)


// the function "whereAmI", is a promise returning function, but this method seems confusing because it is mixing async and promises.
// whereAmI()
//     .then(city => console.log(`2: ${city}`))
//     .catch(err => console.log(`2: ${err.message}`))
//     .finally(() => console.log('3: Finishing getting location'));

// try {
//     let y = 1;
//     const x = 2;
//     x=3;
// }catch (err){
//     alert(err.message)
// }


// // Promise.all
//
// const get3Countries = async function(countryOne, countryTwo, countryThree){
//     try {
//
//         // One by one execution
//         // const dataOne = await fetchData(`https://restcountries.com/v3.1/name/${countryOne}`)
//         // const dataTwo = await fetchData(`https://restcountries.com/v3.1/name/${countryTwo}`)
//         // const dataThree = await fetchData(`https://restcountries.com/v3.1/name/${countryThree}`)
//
//
//         // Parallel Execution
//         const data = await Promise.all([
//             fetchData(`https://restcountries.com/v3.1/name/${countryOne}`),
//             fetchData(`https://restcountries.com/v3.1/name/${countryTwo}`),
//             fetchData(`https://restcountries.com/v3.1/name/${countryThree}`)
//         ])
//
//         console.log(data.map(d => d[0].capital[0]))
//         // console.log(data)
//
//         // console.log([dataOne[0].capital[0], dataTwo[0].capital[0], dataThree[0].capital[0]])
//     } catch (error){
//         console.error(error.message);
//     }
//
//
// }
//
// get3Countries('pakistan', 'canada', 'tanzania')

// Promise.race
const promiseRace = async function(){
    const [response] = await Promise.race([
        fetchData(`https://restcountries.com/v3.1/name/mexico`),
        fetchData(`https://restcountries.com/v3.1/name/italy`),
        fetchData(`https://restcountries.com/v3.1/name/egypt`)
    ])

    console.log(response.capital[0])

}

// promiseRace();

const timeOut = function (s){
    return new Promise(function (_, reject){
        setTimeout(()=>{
            reject(new Error(`Request took too long!`))
        }, s)
    })
}
//
// Promise.race([
//     fetchData(`https://restcountries.com/v3.1/name/pakistan`),
//     timeOut(500)
// ])
// .then(response => {
//     console.log(response[0])
// })
// .then(err =>{
//     console.error(err)
// })


