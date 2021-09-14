var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

const airportsRouter = require("./routes/airports");
const airlinesRouter = require("./routes/airlines");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/airports", airportsRouter);
app.use("/airlines", airlinesRouter);

module.exports = app;
