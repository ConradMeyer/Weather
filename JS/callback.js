// Para conseguir un API KEY visita: https://home.openweathermap.org/api_keys
const WEATHER_API_KEY = "c4a5d60bba8955a6678d1fb43b3844c7";
const INPUTLat = document.querySelector(".lat")
const INPUTLon = document.querySelector(".lon")
const BTN = document.querySelector(".btn")
const TIEMPO = document.querySelector('.ct-chart')
// const RESULTADO = document.querySelector(".resultado-tiempo")

function getWeather(lat, lon, callback) {
		if (!WEATHER_API_KEY)
			callback(new Error("An API KEY must be provided on /JS/callback.js line 4 for function getQuestions to work", null));
		else if (!lat || !lon)
			callback(new Error("You must provide latitude and longitude", null));
		else {
			fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${WEATHER_API_KEY}`)
			.then(response => response.json())
			.then(questions => callback(null, questions))
			.catch(error => {callback(error, null)});
		}
}

function pintarDatos(arr){

	let data = {
		// A labels array that can contain any sort of values
		labels: ['Hoy', 'Mañana', 'Pasado', 'Pasado +1', 'Pasado +2', 'Pasado +3', 'Pasado +4', 'En una semana'],
		// Our series array that contains series objects or in this case series data arrays
		series: [
		  [arr[0].temp.min, arr[1].temp.min, arr[2].temp.min, arr[3].temp.min, arr[4].temp.min, arr[5].temp.min, arr[6].temp.min, arr[7].temp.min],
		  [arr[0].temp.max, arr[1].temp.max, arr[2].temp.max, arr[3].temp.max, arr[4].temp.max, arr[5].temp.max, arr[6].temp.max, arr[7].temp.max]
		]
	  };
	  
	  // Create a new line chart object where as first parameter we pass in a selector
	  // that is resolving to our chart container element. The Second parameter
	  // is the actual data object.
	  new Chartist.Line('.ct-chart', data);
}

BTN.addEventListener("click", () =>
getWeather(INPUTLat.value, INPUTLon.value, (error, datos)=> {
	if (error !== null) {
		console.error(error);
	}
	else {
		pintarDatos(datos.daily);
	}
}))
