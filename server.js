var express = require("express");
app = express();
port = process.env.PORT || 3000;

app.listen(port);

console.log(`Myanmar Postal Code API server started on port : ${port}`);
