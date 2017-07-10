var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: String,
  bio: String,
  image: String,
  teams: [{type: mongoose.Schema.Types.ObjectId, ref: 'Team'}],
  hash: String,
  salt: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
