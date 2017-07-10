var mongoose = require('mongoose');

var responseSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  survey_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Survey' }
});

module.exports = mongoose.model('response', responseSchema);
