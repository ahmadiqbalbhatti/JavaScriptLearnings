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

const renderErrorMessage = function (msg){
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
