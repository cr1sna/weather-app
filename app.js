const request = require("request");
const geocode = require("./routes/geocode.js");
const weather = require("./routes/weather_forcast.js");

weather(85.36667, 27.71667, (error, data) => {
  console.log("hello world!");
});

geocode("kathmandu", (error, data) => {
  console.log("error", error);
  console.log("Data", data);
});
