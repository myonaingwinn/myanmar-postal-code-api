const express = require("express");
const mongoose = require("mongoose");

app = express();
port = process.env.PORT || 3000;
username = process.env.USERNAME;
password = process.env.PASSWORD;

postalCode = require("./api/v1/models/PostalCodeModel"); //created model loading here

bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(
	`mongodb+srv://${username}:${password}@myanmarpostalcodesclust.dtqfr7p.mongodb.net/?retryWrites=true&w=majority`
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./api/v1/routes/PostalCodeRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log(`Myanmar Postal Code API server started on port : ${port}`);
