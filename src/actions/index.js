import axios from 'axios';

const API_KEY = '475a1766003c33f7881b4fae1f281cc7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	//TO KEEP OUR ACTION TYPES CONSISTENT BETWEEN OUR ACTION CREATORS AND OUR REDUCERS IN
	//create a reducer that handles this type right here

	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}


//middleware is our functions that take an action and depending on the actions
//type or payload or any other number of factors the middleware can chose 
//to let the action pass thru, manipulating, log it or stops it
// in shot gatekeepers // functions where actions pass thru to them before hitting the reducer 
