const apikey = "623ce8702cd5b1b9a3750b5752eddbf0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document. querySelector(".weather-img");


async function checkWeather(City) {
    const response = await fetch(apiurl +City + `&appid=${apikey}`);
    var data = await response.json();
    document.querySelector(" .city").innerHTML = data.name;
    document.querySelector(" .temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(" .humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(" .Wind").innerHTML = data.wind.speed + "km/h";

   if(data.weather[0] .main == "Clouds"){
        weathericon. src ="clouds.png" ;
    }
    else if(data.weather[0] .main =="Clear"){
        weathericon. src =   "  clear. png" ;
    }

    else if(data.weather[0] .main == "Mist"){
        weathericon. src = "mist.png";
    }
    else if(data.weather[0] .main == "Rain"){
        weathericon. src = "rain.png";
    }
    else if(data.weather[0] .main == "Drizzle"){
        weathericon. src = "drizzle.png";
    }
    else if(data.weather[0] .main == "Snow"){
        weathericon. src = "snow.png";
    }
    document. querySelector(" .weather") . style.display = "block";
  
    }



searchBtn . addEventListener( "click" ,() => {
    checkWeather(searchBox.value);
});



