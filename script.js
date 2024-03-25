const form = document.querySelector("form");
const input = document.querySelector("#input");
const Searchbtn = document.querySelector("#search-btn");
const CityName = document.querySelector("#city-name");
const CityInnerName = document.querySelector("#city-inner-name");
const localtime = document.querySelector("#localtime");
const Temperature = document.querySelector("#temperature");
const width = document.querySelector("#width");
const humidity = document.querySelector("#humidity");
const AboutCityIcon = document.querySelector("#about-city-icon");
const CurrentLocation = document.querySelector("#current-location");
// console.log(input.value);
// const API_key = "47c87ece2cf18db7119b858d154af4c";
// document.addEventListener("DOMContentLoaded",convertJson);
form.addEventListener("submit",city);

CurrentLocation.addEventListener("click",()=>{
    location.reload(true);
});
// CurrentLocation.addEventListener("click",OurLocation)

const convertJson = async()=>{
    input_value =  input.value.trim();
    const URL = await fetch(`https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${input.value}`);
    const URLOBJ = await URL.json();
    return URLOBJ;
    console.log(URLOBJ);
}

async function city(e){
if (input.value.match(/^[A-Za-z]+$/)) {

    e.preventDefault();
    // input_value =  input.value.trim();
    // const URL = await fetch(`https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${input.value}`);
    // const URLOBJ = await URL.json();
    // console.log(URLOBJ);
    // console.log(URLOBJ.location["name"])
    console.log(await convertJson());
    const responce  = await convertJson();
    // CityInnerName.innerHTML = (URLOBJ.location["name"]);
    CityInnerName.innerHTML = (responce.location["name"]);
    localtime.innerHTML = (responce.location["localtime"]);
    Temperature.innerHTML = (`Temperature : ${responce.current["temp_c"]} Degree`);
    width.innerHTML = (`Wind kph : ${responce.current["wind_kph"]} M/S`);
    humidity.innerHTML = (`Humidity : ${responce.current["humidity"]} %`);
    AboutCityIcon.setAttribute = ("src",`${responce.current.condition["icon"]}`)
     AboutCityIcon.innerHTML = (`<img src="${responce.current.condition["icon"]}">`);
     AboutCityIcon.classList.add("AboutCityIcon");
    }else{
        alert("enter a valid syntax");
    }

}
// // const API = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
// console.log("hello");

