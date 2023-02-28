export const timeFormat = (mili) => {
  const date = new Date(mili * 1000);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
  // return date.getHours() <= 12 ? time + ' AM' : time + ' PM'
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const dateFormat = (strDate) => {
  const date = new Date(strDate * 1000);
  const month = date.getMonth();
  const day = date.getDate();
  return `${days[date.getDay()]}, ${day}/${month + 1}`;
};

export const kmFormat = (km) => {
  if (km >= 1000) {
    return Math.round(km / 1000.0) + " km";
  }
};
