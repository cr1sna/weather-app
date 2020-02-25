const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const pratialsPath = path.join(__dirname, "../templates/pratials");

//Setup handlebars engine and views locations
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(pratialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (resquest, response) => {
  response.render("index", {
    title: "Weather",
    name: "Krishna Gaire"
  });
});

app.get("/help", (resquest, response) => {
  response.render("help", {
    title: "Help",
    name: "Krishna Gaire"
  });
});

app.get("/about", (resquest, response) => {
  response.render("about", {
    name: "Krishna Gaire",
    app_name: "Wheather-app",
    title: "About Me"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404page", {
    error: "Help article not found"
  });
});

app.get("/about/*", (req, res) => {
  res.render("404page", {
    error: "About article not found"
  });
});

app.get("*", (req, res) => {
  res.render("404page", {
    error: "Page not found"
  });
});

app.listen(3000, () => {
  console.log("Wow!!! your server is running");
});
