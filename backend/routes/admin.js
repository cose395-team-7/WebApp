var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var otpAPI = require('../api/otp.js');
var alcAPI = require('../api/alcohol.js');
var doorAPI = require('../api/door.js');

/* GET home page. */
router.get('/', function(req, res, next)
{
  var otpStr = otpAPI.getotp();
  var doorState = doorAPI.getDoorState();
  res.render('index', { title: 'IoT TermProject', otp:otpStr, door:doorState});
});

module.exports = router;
