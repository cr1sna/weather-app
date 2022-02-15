const request = require("request");
const geocode = require("./routes/geocode.js");
const weather = require("./routes/weather_forecast.js");

const address = process.argv[2];

console.log(`I am pujan Kalfe.`)

if (!address) {
  console.log("Please provide the address");
} else {
  geocode(address, (error, { longitude, latitude, location }) => {
    if (error) {
      console.log("error", error);
    } else {
      console.log("Place name: ", location);
    }

    weather(longitude, latitude, (error, Infromation) => {
      if (error) {
        console.log("error:", error);
      } else {
        console.log("Infromation :", Infromation);
      }
    });
  });
}
