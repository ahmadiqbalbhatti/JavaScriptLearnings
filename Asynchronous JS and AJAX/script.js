'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const getCountryData = (countryName) => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);

    request.send()

    request.addEventListener('load', () => {
        const data = JSON.parse(request.responseText);
        console.log(data)
        // let langkeys = [];
        let languages = '';
        let currency = '';

        // data.forEach(item => {
        //     for (const itemKey in item.languages) {
        //         langkeys
        //     }
        //
        // })


        console.log(languages)
        let html = '';

        data.forEach(item => {
            const langKeys = (item.languages && typeof item.languages === 'object') ? Object.keys(item.languages).slice(0, 2) : [];
            console.log(langKeys)
            languages = "";
            for (const langKey of langKeys) {
                languages += item.languages[langKey] + (langKeys.length > 1 ? " | "  : "")
            }

            for (const itemKey in item.currencies) {
                currency = item.currencies[itemKey].name;
            }

            html += `
        <article class ="country">
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
        countriesContainer.style.opacity = 1;
    })

}

getCountryData('pakistan')
getCountryData('usa')
getCountryData('portugal')
