const express = require("express");
const app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

//enable CORS for request verbs

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

//Handle GET method
app.get("/data", function (req, res) {
  fs.readFile("./cardsData.json", function (err, data) {
    res.end(data);
  });
});

app.listen(port, () =>
  console.log(`API is running on http://localhost:${port}/data`)
);