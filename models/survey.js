var mongoose = require('mongoose');

var surveySchema = new mongoose.Schema({
  name: String,
  description: String,
  slug: String,
  questions: [{
    body: String,
    response_type: String }]
});

module.exports = mongoose.model('Survey', surveySchema);
