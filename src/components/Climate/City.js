export async function GetTemperature(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21d807407fc08f0dca752a98c2c9b2d1&lang=sp`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
    // console.log(result);
    // debugger
}