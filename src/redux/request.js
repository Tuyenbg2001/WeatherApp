import axios from "axios";
import { WEATHER_API_KEY } from "../data/WeatherApi";

export default function requestWeather(lat, lon) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
  );
}
