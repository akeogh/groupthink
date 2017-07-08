var express = require('express');
var userRouter = express.Router();
var placeholder = require(__dirname + "/../lib/req-helper").placeholderMsg;

var routerMessage = 'This User Router endpoint not written yet';

// Get a user's information. Auth optional.
userRouter.get('/', placeholder, function(req, res) {

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
