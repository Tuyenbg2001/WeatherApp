import React, { useState } from "react";
import WeekItem from "./WeekItem";
import WeekItemDesc from "./WeekItemDesc";
import { useSelector } from "react-redux";

function Week() {
  const weather = useSelector((state) => state?.weathers.weather?.[0]?.daily);
  const [itemIndex, setItemIndex] = useState(0);
  function handleOnDaySelect(index) {
    setItemIndex(index);
  }
  return (
    <>
      <div className="row cursor-pointer">
        <div className="d-flex flex-wrap">
          {weather?.map((item, index) => (
            <WeekItem
              key={index}
              dt={item.dt}
              icon={item?.weather[0]?.icon}
              tempMin={item.temp.min}
              tempMax={item.temp.max}
              idx={index}
              currIdx={itemIndex}
              onDaySelect={handleOnDaySelect}
            />
          ))}
        </div>
      </div>
      <WeekItemDesc data={weather[itemIndex]} />
    </>
  );
}

export default Week;
