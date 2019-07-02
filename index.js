const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("home");
  res.send("hello and goodbye");
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log("App is running on port " + port);
