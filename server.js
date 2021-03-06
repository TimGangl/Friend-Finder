var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

let PORT = process.env.PORT || 8080;

app.use(express.static('app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});