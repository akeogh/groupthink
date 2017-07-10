var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require(__dirname + '/routes/routes.js');
var appHelper = require(__dirname + '/lib/req-helper');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(appHelper.timestampRequest);

var port = process.env.PORT || 3000;

app.use('/api', routes);

app.listen(port, function() {
  console.log('App listening on port ' + port);
  console.log('Running a ' + process.env.NODE_ENV + ' environment.');
});

