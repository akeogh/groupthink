var express = require('express');
var userRouter = express.Router();
var User = require(__dirname + '/../models/user');
var placeholder = require(__dirname + "/../lib/req-helper").placeholderMsg;

var routerMessage = 'This User Router endpoint not written yet';

// Get a user's information. Auth optional.
userRouter.get('/', function(req, res) {
  User.find(function(err, users) {
    if (err) { res.send(err) }
    res.json(users);
  });
});

userRouter.post('/', placeholder, function() {

});

// Update an existing user. Auth required.
userRouter.put('/:id', placeholder, function() {

});

// Delete a user. Auth required. May not actually create this endpoint?
userRouter.delete('/:id', placeholder, function() {

});

module.exports = userRouter;
