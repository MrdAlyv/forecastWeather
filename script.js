let city = prompt("Şəhər Daxil Edin:")
const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '54d655dd74mshc9eb48671e3ef65p19ca80jsn8116a8d1d3c1',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

async function app() {
    try {
        const response = await fetch(url, options);
     const result = await response.json();
     let local = result.location
     console.log(result);
     const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const d = new Date();
        let day = weekday[d.getDay()];
        document.getElementById("weekday").innerHTML = day;
        document.getElementById('city').innerHTML = `${local.name} ${local.country}`;
        document.getElementById('temp').innerHTML = `${result.current.temp_c}°C`;
        document.getElementById('wet').innerHTML = `${result.current.condition.text}`
        document.getElementById('pre').innerHTML = ` PRECIPITATION : ${result.current.precip_in}%`
        document.getElementById('hum').innerHTML = `HUMIDITY : ${result.current.humidity}%`
        document.getElementById('wind').innerHTML = `WIND : ${result.current.wind_kph}km/h`
       
    } catch (error) {
        console.error(error);
    }

}
app()