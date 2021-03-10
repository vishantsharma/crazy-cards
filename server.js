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
//Handle POST method
// app.post("/", function (req, res) {
//   fs.readFile("./cardsData.json", "utf8", function (err, data) {
//     var response = req.body;
//     var user = JSON.parse(data);
//     user.userList[response.index_type].userDetails[response.index_user].pwd =
//       response.password;
//     fs.writeFileSync("./postData.json", JSON.stringify(user), (err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
//     res.end(JSON.stringify(user));
//   });
// });
// app.post("/changeUsername", function (req, res) {
//   fs.readFile("./cardsData.json", "utf8", function (err, data) {
//     var response = req.body;
//     var user = JSON.parse(data);
//     user.userList[response.index_type].userDetails[
//       response.index_mailId
//     ].userName = response.userName;
//     fs.writeFileSync("./cardsData.json", JSON.stringify(user), (err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
//     res.end(JSON.stringify(user));
//   });
// });
// app.use("/login", (req, res) => {
//   res.send({
//     token: "test123",
//   });
// });
app.listen(port, () =>
  console.log(`API is running on http://localhost:${port}/data`)
);