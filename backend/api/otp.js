// api/otp.js

var express = require('express');
var router = express.Router();
//var doorAPI = require('./door.js');

// current OTP string variable
var otpStr = "";

/*
 * Random Number Generator Function in Integer format
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/*
 * getOTP : returns current OTP string
 */
router.getotp = function getOTP() {
  return otpStr;
}

/*
 * setOTP : set OTP string to _otpStr
 */
router.setotp = function setOTP(_otpStr) {
  otpStr = _otpStr;
}

/*
 * OTPGeneration() : function which generates the OTP string
 * return : OTP string
 */
function OTPGeneration() {
  /*
   * random number generation with length 4 which is used as OTP
   * created otp is stored in optStr in string type
   */
  var otpNum = new Array();
  var ret = "";
  for (var i=0;i<4;i++) {
    otpNum[i]=getRandomInt(10);
    ret+=otpNum[i];
  }

  return ret;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var id = req.query.id;
  if(id==="1") otpStr=OTPGeneration();

  if(!otpStr)otpStr = OTPGeneration();

//  var doorState=doorAPI.getDoorState();

  // redirect to admin page
  if(id==="1") res.redirect('../../admin');
  else res.redirect('../admin');
//  res.render('index', { title: 'IoT TermProject', otp:otpStr}); //, door:doorState
//  res.send(otpStr);
});

module.exports = router;
