const express = require("express");

const app = express();
app.use(express.json);
// for example we know express server take som ejson data we use json midd which will parse incoming json from body of incomiong request
module.exports = app;

// express is just a middleware that we can add top of built in node http server which we can use organize our request by making routes and using middle ware
