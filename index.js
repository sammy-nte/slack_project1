const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const currentDate = new Date();
const currentDay = currentDate.getDay();
document.getElementById("day").textContent = daysOfTheWeek[currentDay];

setInterval(function time() {
  const currentUCTTime = Date.now();
  document.getElementById("time-utc").textContent = currentUCTTime;
}, 1000);
