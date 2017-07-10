var express = require('express');
var teamRouter = express.Router();
var Team = require(__dirname + '/../models/team');
var placeholder = require(__dirname + "/../lib/req-helper").placeholderMsg;

// Get a single team--title, description, member details. Auth optional.
teamRouter.get('/', function(req, res) {
  Team.find(function(err, teams) {
    if (err) { res.send(err) }
    res.send(teams);
  })
});

// Create a new team.
teamRouter.post('/', placeholder, function(req, res) {

});

// Update an existing team. Auth required.
teamRouter.put('/:id', placeholder, function(req, res) {

});

// Delete a team. Auth required.
teamRouter.delete('/:id', placeholder, function(req, res) {

});

// Add a user to a team.
teamRouter.put('/:teamId/users/:userId', placeholder, function(req, res) {

});

module.exports = teamRouter;
