// Team Shen Jams. Project Friend Coral. March 2018

var express = require("express");
var bodyParser = require("body-parser");
var https = require("https");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
// var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
});



