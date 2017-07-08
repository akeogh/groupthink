var express = require('express');
var surveyRouter = express.Router();

var placeholder = require(__dirname + "/../lib/req-helper").placeholderMsg;

surveyRouter.get('/', placeholder, function(req, res) {

});

module.exports = surveyRouter;
