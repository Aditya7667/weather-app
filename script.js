const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b0f033ce46mshf2012e0f8eb47bcp1a53dejsndfea5814a8a4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const locations = (city) => {
	cityname.innerHTML = city;

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {

			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			console.log(response)
		})
		.catch(err => console.error(err))
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	locations(city.value)
})

locations("Mumbai")




fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
		.then(response => response.json())
		.then(response => {

			htemp.innerHTML = response.temp
			hfeels_like.innerHTML = response.feels_like
			hhumidity.innerHTML = response.humidity
			hmin_temp.innerHTML = response.min_temp
			hmax_temp.innerHTML = response.max_temp
			hwind_speed.innerHTML = response.wind_speed
			hwind_degrees.innerHTML = response.wind_degrees
			console.log(response)
		})
		.catch(err => console.error(err))



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kerala', options)
		.then(response => response.json())
		.then(response => {

			ktemp.innerHTML = response.temp
			kfeels_like.innerHTML = response.feels_like
			khumidity.innerHTML = response.humidity
			kmin_temp.innerHTML = response.min_temp
			kmax_temp.innerHTML = response.max_temp
			kwind_speed.innerHTML = response.wind_speed
			kwind_degrees.innerHTML = response.wind_degrees
			console.log(response)
		})
		.catch(err => console.error(err))



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur', options)
		.then(response => response.json())
		.then(response => {

			jtemp.innerHTML = response.temp
			jfeels_like.innerHTML = response.feels_like
			jhumidity.innerHTML = response.humidity
			jmin_temp.innerHTML = response.min_temp
			jmax_temp.innerHTML = response.max_temp
			jwind_speed.innerHTML = response.wind_speed
			jwind_degrees.innerHTML = response.wind_degrees
			console.log(response)
		})
		.catch(err => console.error(err))



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bokaro', options)
		.then(response => response.json())
		.then(response => {

			btemp.innerHTML = response.temp
			bfeels_like.innerHTML = response.feels_like
			bhumidity.innerHTML = response.humidity
			bmin_temp.innerHTML = response.min_temp
			bmax_temp.innerHTML = response.max_temp
			bwind_speed.innerHTML = response.wind_speed
			bwind_degrees.innerHTML = response.wind_degrees
			console.log(response)
		})
		.catch(err => console.error(err))



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
		.then(response => response.json())
		.then(response => {

			ptemp.innerHTML = response.temp
			pfeels_like.innerHTML = response.feels_like
			phumidity.innerHTML = response.humidity
			pmin_temp.innerHTML = response.min_temp
			pmax_temp.innerHTML = response.max_temp
			pwind_speed.innerHTML = response.wind_speed
			pwind_degrees.innerHTML = response.wind_degrees
			console.log(response)
		})
		.catch(err => console.error(err))