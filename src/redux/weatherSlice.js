import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getLatLong from "./getLatLong";
import requestWeather from "./request";

const initialState = {
  weather: [],
};
export const handleFetchWeather = createAsyncThunk(
  "weather/handlefetchWeather",
  async (q) => {
    const latLon = await getLatLong(q);
    const dataLatLong = latLon.data;
    const lat = dataLatLong[0].lat;
    const lon = dataLatLong[0].lon;
    const response = await requestWeather(lat, lon);
    const dataWeather = response.data;
    return [dataWeather, dataLatLong[0]];
  }
);
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider.addCase(handleFetchWeather.fulfilled, (state, action) => {
      state.weather = action.payload;
    });
  },
});

export default weatherSlice.reducer;
