var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

var cors = require('cors')
app.use(cors())

const airportsRouter = require('./routes/airports');
const airlinesRouter = require('./routes/airlines');
const flightsRouter = require('./routes/flightInfo');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/flights', cors(), flightsRouter);
app.use('/airports', cors(), airportsRouter);
app.use('/airlines', cors(), airlinesRouter);
app.use('/', cors(), (req, res) => res.json({ message: 'Hello world!' }));

module.exports = app;
