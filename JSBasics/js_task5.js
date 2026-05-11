function calcExchangeRate(callback) {           //simple synchronous callback example
    let cur1 = prompt("Enter USD exchange rate")
    let cur2 = prompt("Enter EUR exchange rate")
    callback(cur1, cur2)
}

function calcCrossRate(cur1, cur2) {
    let crossRate = (cur1 / cur2)
    console.log(`1 USD today equals ${crossRate} EUR`)
}

 calcExchangeRate(calcCrossRate)

// Async calls
// Flow:
// 1) First function fetches random user' data (incl. name and coordinates)
// 2) Second function displays in console greeting user' name and word "Weather?..", and fetches weather (temperature)
//    at user' coords
// 3) Third function process temperature's value and displays according weather notification ("Frost", "Cold", etc.)      

// Four variants are provided:

// 1) With includung following function into previous
// 2) With passing callbacks from previous function to following function
// 3) With promises (all functions are independent)
// 4) With async/await and fetch


// Example1 - with direct call of named functions
// Disadvantage of this approach - functions aren't independent; they include nested functions

function getUserInfo() {   // First function gets name of random user, greets him, and coords
                           // (latitude, longitude) and pass them to the next function -
                           // getUserWeatherByCoords

    const req = new XMLHttpRequest()
    req.onload = () => {
        let response = JSON.parse(req.responseText)
        console.log(`Hi, ${response.results[0].name.first}!`)
        let coords = response.results[0].location.coordinates
        getUserWeatherByCoords(coords)
    }
    req.open("GET", "https://api.randomuser.me/?results=1")
    req.send()
}

function getUserWeatherByCoords(coords) { // Second function gets weather at coords provided by first function
                                          // and pass the result (temperature) to the final function - sendWeatherNotification
    console.log("Weather?..")
    let { latitude, longitude } = coords
    const req = new XMLHttpRequest()
    req.onload = () => {
        let response = JSON.parse(req.responseText)
        const temp = response.current.temperature_2m
        sendWeatherNotification(temp)
    }
    req.open("GET", `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)
    req.send()
}

function sendWeatherNotification(temp) { // Function displays notification about weather on the basis of 
                                         // temperature provided by previous function
    let info;
    switch (true) {
        case temp < -20:
            info = 'Weather is FROSTY!'
            break;
        case temp > - 20 && temp < -10:
            info = "Weather is frosty"
            break;
        case temp > -10 && temp < 0:
            info = "Weather is cold"
            break;
        case temp > 0 && temp < 10:
            info = "Weather is cool"
            break;
        case temp > 10 && temp < 20:
            info = "Weather is fresh"
            break;
        case temp > 20 && temp < 30:
            info = "Weather is comfortable"
            break;
        case temp > 30:
            info = "Weather is HOT!"
            break;
        default:
            info = "Just a moment...";
            break;
    }
    console.log(info)
}

getUserInfo() //Launch of the chain by calling first function (nested functions/callbacks are called inside)

//Example 2 - with callbacks

function getUserInfo0(callback1, callback2) {
    const req = new XMLHttpRequest()
    req.onload = () => {
        let response = JSON.parse(req.responseText)
        console.log(`Hi, ${response.results[0].name.first}!`)
        let coords = response.results[0].location.coordinates
        callback1(coords, callback2)         //replace named function with callback
    }
    req.open("GET", "https://api.randomuser.me/?nat=US&rresults=1")
    req.send()
}

function getUserWeatherByCoords0(coords, callback2) {
    console.log("Weather?")
    let { latitude, longitude } = coords
    const req = new XMLHttpRequest()
    req.onload = function () {
        let response = JSON.parse(this.responseText)
        const temp = response.current.temperature_2m
        callback2(temp)                      //replace named function with callback
    }
    req.open("GET", `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)
    req.send()
}


getUserInfo0(getUserWeatherByCoords, sendWeatherNotification) //call first function and pass to it callbacks

// Example 3 - with Promises
// Advantage of this approach - all functions are independent; they are called in chain with .then


function getUserInfo1() {
    return new Promise(function (resolve, reject) {
        const req = new XMLHttpRequest()
        req.onload = function () {
            if (req.status == 200) {
                let response = JSON.parse(req.responseText)
                console.log(`Hi, ${response.results[0].name.first}!`)
                let coords = response.results[0].location.coordinates
                resolve(coords)
            } else {
                reject(Error(req.statusText))
            }
        }
        req.onerror = () => {
            reject(Error("Network Error"))
        }
        req.open("GET", "https://api.randomuser.me/?nat=US&results=1")
        req.send()
    })
}

function getUserWeatherByCoords1(coords) {
    console.log("Weather?")
    let { latitude, longitude } = coords
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest()
        req.onload = () => {
            if (req.status == 200) {
                let response = JSON.parse(req.responseText)
                const temp = response.current.temperature_2m
                resolve(temp)
            } else {
                reject(Error(req.statusText))
            }
        }
        req.open("GET", `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)
        req.send()
    })
}

getUserInfo1()
    .then(data => {
        return getUserWeatherByCoords1(data)
    })
    .then(data => {
        sendWeatherNotification(data)
    })
    .catch((error) => {
        console.log(error)
    })


// Variant 4 - with Async/Await and fetch
// Advantage - all functions are also independent; the most readable variant.

async function getUserInfo2() {

    const response = await fetch('https://api.randomuser.me/?results=1');
    const data = await response.json();
    console.log(`Hi, ${data.results[0].name.first}!`)
    let coords = data.results[0].location.coordinates
    return coords;
}


async function getUserWeatherByCoords2(coords) {

    console.log("Weather?")
    let { latitude, longitude } = coords
    let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)
    let data = await response.json()
    const temp = data.current.temperature_2m
    return temp
}

getUserInfo2()
    .then(data => {
        return getUserWeatherByCoords2(data)
    })
    .then(data => {
        sendWeatherNotification(data)
    })
    .catch((error) => {
        console.log(error)
    })
