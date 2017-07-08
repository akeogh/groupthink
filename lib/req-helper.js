var ReqHelper = function() {};

ReqHelper.prototype.timestampRequest = function(req, res, next) {
  console.log('REQUEST: ' + req.path + '\n         ' + timestamp());
  next();
}

ReqHelper.prototype.placeholderMsg = function(req, res, next) {
  var message = '***This endpoint has not been written yet.***';
  console.log(message);
  res.json({message: message});
}

function timestamp() {
  var date = new Date(Date.now());
  var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  return (hours + ':' + date.getMinutes() + ':' + date.getSeconds());
}

module.exports = new ReqHelper();
