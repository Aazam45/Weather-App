let weather = {
    apiKey: "30ec85851b08e79fcb8edf5f568f6eda",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed: " + speed + "km/h";
        // document.body.style.backgroundImage = "url('https://api.unsplash.com/search/photos?page=1&query=" + name + "&client_id=Id6aPQY1UBGkCpEfz0BMHAqZjcqyfx0GZhYzeB21d7g')";
    },

    /******coudn't render background image by city name the data of the unplash api is successfully fetch
     and console log in browser but currently can't connect to css to change background image. */ 
    // unplash_apiKey: "Id6aPQY1UBGkCpEfz0BMHAqZjcqyfx0GZhYzeB21d7g",
    // fetchBackgroundImg: function(imgCity) {
    //     fetch("https://api.unsplash.com/search/photos?page=1&query=" 
    //     + imgCity 
    //     + "&orientation=landscape&client_id=" 
    //     + this.unplash_apiKey
    //     )
    //     .then((res) => res.json())
    //     .then((imgData) => console.log(imgData));
    // },
    // displayBackImg: function(imgData) {
    //     const { title } = imgData;
    //     const regular = imgData[0].urls.regular;
    //     document.body.style.backgroundImage = "url('regular')";
    // },

    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
        // this.fetchBackgroundImg(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button")
.addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("london");
// weather.fetchBackgroundImg();