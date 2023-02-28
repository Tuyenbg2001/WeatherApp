import React from "react";
import { kmFormat, timeFormat } from "../../../plugins/Format";
import { useSelector } from "react-redux";
function Today() {
  const weather = useSelector((state) => state?.weathers.weather?.[0]?.current);
  return (
    <div className="row">
      <div className="d-flex flex-wrap">
        <div className="col-md-6 col-xl-4 col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">UV index</p>
            <div className="text-center">
              <img
                src="/svg/uv index.svg"
                alt=""
                className="img-fluid"
                style={{ width: "30px" }}
              />
              <p className="fs-3 text-muted fw-bold">{weather?.uvi}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-4 col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Wind status</p>
            <div className="text-center">
              <img
                src="/svg/wind.svg"
                alt=""
                className="img-fluid"
                style={{ width: "30px" }}
              />
              <p className="fs-3 text-muted fw-bold">
                {weather?.wind_speed}km/h
              </p>
            </div>
          </div>
        </div>

        <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Sunrise &amp; Sunset</p>
            <p className="fs-4 text-muted fw-bold d-flex align-items-center">
              <img
                src="/svg/sunrise.svg"
                alt=""
                className="img-fluid"
                style={{ width: "30px", marginRight: "10px" }}
              />
              {timeFormat(weather?.sunrise)};
            </p>
            <p className="fs-4 text-muted fw-bold d-flex align-items-center">
              <img
                src="/svg/sunset.svg"
                alt=""
                className="img-fluid"
                style={{ width: "30px", marginRight: "10px" }}
              />
              {timeFormat(weather?.sunset)}
            </p>
          </div>
        </div>

        <div className="col-md-6 col-xl-4 col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Humidity</p>
            <div className="text-center">
              <img
                src="/svg/humidity.svg"
                alt=""
                className="img-fluid"
                style={{ width: "30px" }}
              />
              <p className="fs-3 text-muted fw-bold">{weather?.humidity}%</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-4 col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Visibility</p>
            <div className="text-center">
              <img
                src="/svg/visibility.svg"
                alt=""
                className="img-fluid"
                style={{ width: "30px" }}
              />
              <p className="fs-3 text-muted fw-bold">
                {kmFormat(weather?.visibility)}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-4 col-sm-12 p-3">
          <div className="bg-white p-2 rounded-3 h-100">
            <p className="fs-5 text-black-50">Pressure</p>
            <div className="text-center">
              <img
                src="/svg/pressure.svg"
                alt=""
                className="img-fluid"
                style={{ width: "30px" }}
              />
              <p className="fs-3 text-muted fw-bold">{weather?.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;
