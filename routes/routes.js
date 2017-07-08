var express = require('express');
var router = express.Router();

var userRouter = require(__dirname + '/user-router');
var groupRouter = require(__dirname + '/group-router');
var surveyRouter = require(__dirname + '/survey-router');
var responseRouter = require(__dirname + '/response-router');

router.get('/', function(req, res) {
  console.log('There has been a request!');
  res.json({ message: 'request to first route received!'});
})

router.use('/users', userRouter);
router.use('/groups', groupRouter);
router.use('/surveys', surveyRouter);
router.use('/responses', responseRouter);


module.exports = router;
