"use strict";
module.exports = function (app) {
	var postalCodeList = require("../controllers/PostalCodeController");

	// PostalCodeList Routes
	app.route("/postalCodes").get(postalCodeList.list_all_postalCodes);

	app.route("/postalCodes/:postalCodeId").get(postalCodeList.read_a_postalCode);
};
