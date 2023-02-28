import axios from "axios";

export default function getLatLong(q) {
  return axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=5&appid=49cc8c821cd2aff9af04c9f98c36eb74`
  );
}
