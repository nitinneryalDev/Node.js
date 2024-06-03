const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "public");
const reqFilter = require("./middleware");

const route = express.Router();

//  app.use(reqFilter)

route.use(reqFilter);
route.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

app.get("/help", (req, res) => {
  res.send("Welcome to Help page");
});

app.use("/", route);

app.listen(5000);
