var express = require('express');
var responseRouter = express.Router();

var placeholder = require(__dirname + "/../lib/req-helper").placeholderMsg;

responseRouter.get('/', placeholder, function(req, res) {

});

module.exports = responseRouter;
