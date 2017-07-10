var express = require('express');
var surveyRouter = express.Router();
var Survey = require(__dirname + '/../models/survey');

var placeholder = require(__dirname + "/../lib/req-helper").placeholderMsg;

// Get a single survey. Auth required.
surveyRouter.get('/:id', placeholder, function(req, res) {

});

// Get all surveys of a group. Auth required.
surveyRouter.get('/:groupId', placeholder, function(req, res) {

});

// Create a new survey.
surveyRouter.post('/', placeholder, function(req, res) {

});

// Update an existing survey. Auth required.
surveyRouter.put('/:id', placeholder, function(req, res) {

});

// Delete a survey (including responses?). Auth required.
surveyRouter.delete('/:id', placeholder, function(req, res) {

})

module.exports = surveyRouter;
