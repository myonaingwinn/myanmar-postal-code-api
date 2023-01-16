"use strict";

var mongoose = require("mongoose"),
	postalCode = mongoose.model("PostalCode");

exports.list_all_postalCodes = function (req, res) {
	postalCode.find({}, function (err, postalCode) {
		if (err) res.send(err);
		res.json(postalCode);
	});
};

exports.read_a_postalCode = function (req, res) {
	postalCode.findById(req.params.postalCodeId, function (err, postalCode) {
		if (err) res.send(err);
		res.json(postalCode);
	});
};
