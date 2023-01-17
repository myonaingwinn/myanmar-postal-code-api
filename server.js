const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

app.get("/", (req, res) => {
	console.log(req.url);
	console.log(req.method);
	res.send("Hello, world!");
});

app.listen(port, () => {
	console.log(
		`Myanmar Postal Code API server started on port : 
        ${port}, ${username}, ${password}
        http://localhost:${port}`
	);
});
