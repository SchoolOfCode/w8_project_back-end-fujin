var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require('axios');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.get('/flights', (req, res) => 
// $.ajax({
//     type: "GET",
//     url: "https://api.oag.com/flights/?Limit=10",

//     beforeSend: function(xhrObj) {
//         xhrObj.setRequestHeader("Cache-Control", "no-cache");
//         xhrObj.setRequestHeader("Subscription-Key", "251562bba0704e11b8a9fad1342c6ea6");
//         },
//     })
// .done(function (data) {
//     alert("success");
// })
// .fail(function () {
//     alert("error");
// }))

app.get("/test", async (req, res) => {
      const response = await axios.get(
          "https://api.oag.com/flights/?Limit=10",
          {headers: {"Subscription-Key": "251562bba0704e11b8a9fad1342c6ea6"}}
      );
      const data = await response.data;
      res.json(data);
});

module.exports = app;
