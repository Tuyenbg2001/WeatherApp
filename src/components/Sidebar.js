import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import cityImage from "../img/CityBackground.png";
import { timeFormat, dateFormat } from "../plugins/Format";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchWeather } from "../redux/weatherSlice";
function Sidebar() {
  const [search, setSearch] = useState("");
  const query = useDebounce(search ? search : "Hà Nội", 1000);
  const dispatch = useDispatch();
  const weather = useSelector((state) => state);
  useEffect(() => {
    dispatch(handleFetchWeather(query));
  }, [dispatch, query]);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="col-md-3 col-sm-12 bg-white p-4">
      <div className="wrap">
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <div className="fs-2 fw-bold lh-sm text-dack mt-4">
            {weather?.weathers?.weather?.[1]?.name}
          </div>
          <div className="fs-1 fw-bold">
            {Math.floor(weather?.weathers?.weather?.[0]?.current?.temp)}°C
          </div>
          <div className="fs-5 lh-lg">
            {dateFormat(weather?.weathers?.weather?.[0]?.current?.dt)},{" "}
            {timeFormat(weather?.weathers?.weather?.[0]?.current?.dt)}
          </div>
          <div className="fs-6 lh-base text-capitalize text-muted mb-3">
            {weather?.weathers?.weather?.[0]?.current?.weather?.[0].description}{" "}
            <br />
            {weather?.weathers?.weather?.[0]?.current?.clouds}%
          </div>
          <div className="position-relative d-flex justify-content-center align-items-center">
            <div className="position-absolute">
              <div className="fs-3 fw-bold text-white">
                {weather?.weathers?.weather?.[1]?.name}
              </div>
            </div>
            <img src={cityImage} alt="" className="img-fluid rounded " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
