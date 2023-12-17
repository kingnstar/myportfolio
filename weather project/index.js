
const ApiUrl1= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const ApiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bhubaneswar";
const ApiKey="b156c1f6a9873834328de314ded95620";
const searchInput=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weathericon");



async function checkWeather(city){

    
    
    const response=await fetch(ApiUrl1+city+`&appid=${ApiKey}`);
    var data= await response.json();
    if(data.cod=="404")
    {
        alert("City not found!");
    }
    else{
        document.querySelector(".weather").style="display:block"
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=Math.round(data.main.feels_like)+"°C";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="imgs/clouds.png"
    }
    else if(data.weather[0].main=="Clear")
    {
        weathericon.src="imgs/clear.png"
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weathericon.src="imgs/drizzle.png"

    }
    else if(data.weather[0].main=="Snow")
    {
        weathericon.src="imgs/snow.png"

    }
   
    else if(data.weather[0].main=="Mist")
    {
        weathericon.src="imgs/mist.png"

    }
    else if(data.weather[0].main=="Rain")
    {
        weathericon.src="imgs/rain.png"

    }
    console.log(data.weather[0].main)
    
    
    console.log(weathericon.src)
    }
    
}
searchbtn.addEventListener("click",function(){
    var city = searchInput.value;
    checkWeather(city);

})



// var search=document.querySelector(".search button");
// search.document.addEventListener("click",function(){
//     checkWeather();
// })


// https://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&units=metric&appid=b156c1f6a9873834328de314ded95620
// https://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&units=metric&appid=b156c1f6a9873834328de314ded95620