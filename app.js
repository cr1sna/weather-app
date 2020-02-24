const request = require("request");
const geocode = require("./routes/geocode.js");
const weather = require("./routes/weather_forecast.js");

const address = process.argv[2];

if (!address) {
  console.log("Please provide the address");
} else {
  geocode(address, (error, data) => {
    if (error) {
      console.log("error", error);
    } else {
      console.log("Data", data);
    }

    weather(data.longitude, data.latitude, (error, data) => {
      if (error) {
        console.log("error:", error);
      } else {
        console.log("Infromation :", data);
      }
    });
  });
}
