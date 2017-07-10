var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
  name: String,
  description: String,
  surveys: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Survey' }]
});

module.exports = mongoose.model('Team', teamSchema);
