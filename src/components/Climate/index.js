//incorporar la web API
//darle una funcion al boton SUBMIT
//darle funcion a los nodos de div result
//desparecer del comienzo el div y incorporar div infinitos
import './style.css';
import { GetTemperature } from './City.js';
import { GetIcon } from './Icon.js';


export default function ClimateComponent() {
    function convertirGrados(kelvin){
        const gradosCelsios = (kelvin - 273.15);
        return gradosCelsios.toFixed(0);
    }
    
    const searchTemperatureCity = async() => {
        const city = document.querySelector(".container__question--input");
        const res = await GetTemperature(city.value);
        const temperatureCity = {
            city: res.name,
            temperature: res.main.temp,
            icon: res.weather[0].icon,
            description: res.weather[0].description,
        }
    
        document.querySelector(".container__response").style.display = "grid";
    
        const newLocation = document.createElement("div");
        newLocation.classList.add("location");
    
        const newUl = document.createElement("ul");
    
        const newLiCity = document.createElement("li");
        newLiCity.classList.add("city");
        newLiCity.innerHTML = temperatureCity.city;
    
        newUl.append(newLiCity);
        newLocation.append(newUl);
    
        const newLiTemperature = document.createElement("li");
        newLiTemperature.classList.add("temperature");
        const kelvin = temperatureCity.temperature;
        newLiTemperature.innerHTML = `${convertirGrados(kelvin)} °C`;
    
        newUl.append(newLiTemperature);
    
        const newLiICon = document.createElement("li");
        const newImage = document.createElement("img");
        newImage.classList.add("icon");
        newImage.src = GetIcon(temperatureCity.icon);
    
        newLiICon.append(newImage);
        newUl.append(newLiICon);
    
        // const description = document.querySelector(".description");
        // description.innerHTML = temperatureCity.description;
        const newDescription = document.createElement("li");
        newDescription.classList.add("description");
        newDescription.innerHTML = temperatureCity.description;
    
        newUl.append(newDescription);
        
    
    
        document.querySelector(".container__response").append(newLocation);
    }
    return (
        <div className="container" id="container">
            <section className="container__title">
                <h1 className="container__title--h1">Simple Weather App</h1>
            </section>
            <section className="container__question">
                <input className="container__question--input" type="text" placeholder="Search for a city" />
                <button className="container__question--button" onClick={searchTemperatureCity}>SUBMIT</button>
            </section>
            <section className="container__response">
            </section>
        </div>
    );
    
}






    






