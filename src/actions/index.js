import Axios from 'axios';

const API_KEY = '68a3bf2dab736a3631c4d3e9682d957b';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  // we are basicly seacrhing for url http://api.openweathermap.org/data/2.5/forecast?appid=b6907d289e10d714a6e88b30761fae22&q=München,DE, this can be get from OPENWEATHER website address example

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}