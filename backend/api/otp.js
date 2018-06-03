// api/otp.js

var express = require('express');
var router = express.Router();

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
function getOTP(){
  return otpStr;
}

/*
 * setOTP : set OTP string to _otpStr
 */
function setOTP(_otpStr){
  otpStr = _otpStr;
}

function OTPGeneration(){
  /*
   * random number generation with length 4 which is used as OTP
   * created otp is stored in optStr in string type
   */
  var otpNum = new Array();
  var ret = "";
  for (var i=0;i<4;i++){
    otpNum[i]=getRandomInt(10);
    ret+=otpNum[i];
  }
  return ret;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  if(otpStr===""){
    otpStr = OTPGeneration();
  }

  /*
   * send otpStr with string format
   */
  res.render('index', { title: 'IoT TermProject', otp:otpStr});
  res.send(otpStr);
});

module.exports = router;
