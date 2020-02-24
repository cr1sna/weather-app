const request = require("request");

const weather = (longitude, latitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/0e69b3d3e152d29b1c1f95c830fa4c2d/" +
    latitude +
    "," +
    longitude +
    "?units=auto";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the internet", undefined);
    } else if (response.body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(
        undefined,
        "The weather is " +
          response.body.currently.summary +
          "  and the temperature is:" +
          response.body.currently.temperature +
          " degree celsius"
      );
    }
  });
};

module.exports = weather;
