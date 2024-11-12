const apiKey = "42286afc0c95550d66db2282a0afaf9a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }else{
        var data = await response.json();

    console.log(data);

    document.querySelector('.error').style.display = "none";
    document.querySelector('.weather').style.display = "block";

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});


    