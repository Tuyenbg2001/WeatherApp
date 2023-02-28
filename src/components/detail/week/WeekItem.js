import React from "react";
import { dateFormat } from "../../../plugins/Format";
function WeekItem({ dt, tempMin, tempMax, icon, idx, onDaySelect, currIdx }) {
  function handleOnClick(idx) {
    onDaySelect(idx);
  }
  return (
    <>
      <div
        className="col-xs-12 col-md-3 col-sm-6 p-1"
        style={{ cursor: "pointer" }}
      >
        <div
          className={`${
            idx === currIdx ? "bg-info" : "bg-white"
          } p-2 rounded-3 h-100`}
          onClick={() => handleOnClick(idx)}
        >
          <p className="fs-6 text-black-50">{dateFormat(dt)}</p>
          <div className="text-center">
            <img
              className="img-fluid"
              alt="icon"
              src={`icons/${icon}.png`}
              style={{ width: "40px" }}
            />
            <div className="fs-6 text-muted fw-bold">
              {Math.floor(tempMin)}°C - {Math.floor(tempMax)}°C
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeekItem;
