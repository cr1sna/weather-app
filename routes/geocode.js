const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiY3Ixc25hIiwiYSI6ImNrNnl4eXNkaDBvcWUzbHBmYXV4cHJrbGgifQ.HNdZ-GoKKwlqk1VZoU3PNg";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the internet", undefined);
    } else if (response.body.features.length === 0) {
      callback("Try another location", undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
