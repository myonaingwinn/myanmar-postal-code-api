"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostalCodeSchema = new Schema({
	region: {
		type: String,
	},
	townOrTownship: {
		type: String,
	},
	quarterOrVillageTract: {
		type: String,
	},
	postalCode: {
		type: String,
	},
});

module.exports = mongoose.model("PostalCode", PostalCodeSchema);
