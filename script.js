
    let weather = {
        fetchweather: function (city) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=fbc51aa9c8ae8b0f32d6084da2aca39c"
                ).then(response => response.json())
                .then(data => this.displayweather(data))
        },
        displayweather: function(data) {
            const { name } = data
            const { icon, description } = data.weather[0]
            const { temp,humidity } = data.main
            const { speed } = data.wind
            document.querySelector(".city").innerText = "Weather in " + name
            document.querySelector(".temp").innerText = temp + " °C"
            document.querySelector(".description").innerText = description 
            document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%"
            document.querySelector(".wind").innerText = "Wind Speed" + speed + "km/h"    
            document.querySelector(".weather").classList.remove("loading")
        },
        search: function (){
            this.fetchweather(document.querySelector("#location").value)
        }
    }

 document.querySelector(".search input").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      weather.search()
    }
})