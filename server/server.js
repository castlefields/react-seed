var express = require('express');
var bodyParser = require ('body-parser');
var path = require('path');

var app = express();

// allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// REGISTER OUR ROUTES
// public-facing application route
app.use(express.static(path.resolve(__dirname, '../build')));
app.use('/', require('./public/main'));

// all of our API routes will prefixed with /api
// app.use('/api', require('./api/todos'));

module.exports = app;