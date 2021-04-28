// const axios = require('axios')// импортировать библиотеку
// const chalk = require('chalk')




// axios('https://swapi.dev/api/starships/9/')
// .then((result) => console.log(result.data))
//
// console.log(chalk.bgRed.bold("my first chalk example"))

// const getUser = (id) =>{
//     axios.get(`https://swapi.dev/api/starships/${id}`)
//         .then(res=>console.log(chalk.bgRed.bold(res.data.name)))
// }
//
// getUser(9)


// let city = "Bishkek"
// let key = "6c9081e4fb8cf6d47223ed7f7dfca4c0"
// axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
//     .then(res => console.log(res.data))




// let city = "Bishkek"
// let key = "6c9081e4fb8cf6d47223ed7f7dfca4c0"
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
//
//
//     .then(res => res.json())
//     .then(weather => console.log(weather.main.temp))

const getWeather = (city) => {
    let apiKey = "6c9081e4fb8cf6d47223ed7f7dfca4c0"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(apiUrl)
        .then(res => {
            if (res.status === 404) {
                throw new Error("Неверная страна")
            }
            return res.json()
        })
        .then(weather => {
            drawWeather(weather)
        })
        .catch((error) => console.log(error))
}
function drawWeather(weather) {
    document.querySelector("#city span").innerHTML = weather.name
    document.querySelector("#temp span").innerHTML = Math.round(weather.main.temp)
    document.querySelector("#wind span").innerHTML = Math.round(weather.wind.speed)
    document.querySelector(".weather-img").src= `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
}
getWeather("Talas")
let btn = document.querySelector(".view-weather")
btn.addEventListener("click", () => {
    let cityName = document.querySelector(".input-city")

    getWeather(cityName.value)
    cityName.value = ""
})
