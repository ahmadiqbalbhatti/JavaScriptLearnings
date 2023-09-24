const API_KEY = '96197725910685815644x47362'


import {renderCountry} from "./script.js"



const whereAmI = (lat, lng) => {
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${API_KEY}}`, )
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.st} - ${response.state}`)
            }
            return response.json();
        })
        .then(data => {
            console.log(`You are in ${data.region}.`)
            console.log(`You are in ${data.country}.`)
            return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        })
        .then(data  => {
            renderCountry(data)
        })
}


const getPosition = ()=>{
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude} = position.coords;
            const {longitude} = position.coords;
            whereAmI(latitude, longitude)
                .catch(error => {
                    console.log(error)
                })
                .finally(() =>{
                    console.log("Finally,I'll got married");
                })
        })
    }
}

getPosition();

// console.log(whereAmI(51.50354, -0.12768));
