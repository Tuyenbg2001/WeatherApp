import React from "react";
import { dateFormat, timeFormat } from "../../../plugins/Format";
function WeekItemDesc({ data }) {
  return (
    <div className="bg-white my-5 p-2 rounded-3">
      <p className="fs-5 text-muted">{dateFormat(data.dt)}</p>
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <p className="fs-6 text-muted">
            Temp current : {Math.floor(data.temp.day)}°C
          </p>
          <p className="fs-6 text-muted">
            Temp : {Math.floor(data.temp.min)}°C - {Math.floor(data.temp.max)}°C
          </p>
          <p className="fs-6 text-muted">Humidity : {data.humidity}%</p>
          <p className="fs-6 text-muted">Wind speed : {data.wind_speed} km/h</p>
        </div>
        <div className="col-md-6 col-xs-12">
          <p className="fs-6 text-muted">
            Sunrise : {timeFormat(data.sunrise)}
          </p>
          <p className="fs-6 text-muted">Sunset : {timeFormat(data.sunset)}</p>
          <p className="fs-6 text-muted">
            Description : {data.weather[0].description}
          </p>
          <p className="fs-6 text-muted">
            Atmospheric pressure : {data.pressure} hPa
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeekItemDesc;
