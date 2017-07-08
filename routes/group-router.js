var express = require('express');
var groupRouter = express.Router();
var placeholder = require(__dirname + "/../lib/req-helper").placeholderMsg;

// Get a single group. Auth optional.
groupRouter.get('/', placeholder, function(req, res) {

});

// Create a new group.
groupRouter.post('/', placeholder, function(req, res) {

});

// Update an existing group. Auth required.
groupRouter.put('/:id', placeholder, function(req, res) {

});

// Delete a group. Auth required.
groupRouter.delete('/:id', placeholder, function(req, res) {

});

module.exports = groupRouter;
