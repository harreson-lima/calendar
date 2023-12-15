const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];
const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayEle = document.getElementById("day-number");
const weekDayEle = document.getElementById("week-day");
const yearEle = document.getElementById("year");
const monthEle = document.getElementById("month");

function updateDate() {
  const date = new Date();
  dayEle.innerHTML = date.getDate();
  weekDayEle.innerHTML = WEEKDAYS[date.getDay()];
  monthEle.innerHTML = MONTHS[date.getMonth()];
  yearEle.innerHTML = date.getFullYear();
}

const interval = setInterval(updateDate, 1000);
