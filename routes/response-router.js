var express = require('express');
var responseRouter = express.Router();
var Response = require(__dirname + '/../models/response');

var placeholder = require(__dirname + "/../lib/req-helper").placeholderMsg;

//get all responses for a particular survey. Auth required.
responseRouter.get('/:surveyId', placeholder, function(req, res) {
  // { userId: {
  //     qKey1: "XYZ",
  //     qKey2: 'ABC'
  //   },
  //   userId2: {}
  // }
});

// Get response for a survey by a single user.
responseRouter.get('/:surveyId/users/:userId', placeholder, function(req, res) {

});

// Post a new response. Auth required.
responseRouter.post('/', placeholder, function(req, res) {

});

// Update a response. Auth required.
responseRouter.put('/:id', placeholder, function(req, res) {

});

// Delete a response. Auth required.
responseRouter.delete('/:id', function(req, res) {

});

module.exports = responseRouter;
