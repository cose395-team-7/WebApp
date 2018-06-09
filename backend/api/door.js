// api/door.js

var express = require('express');
var router = express.Router();
var otpAPI = require('otp');

/*
 * isDoorOpen : variable that represents the door state. true - open, false - close
 */
var isDoorOpen = false;

/*
 * attemptCnt : variable that repersents the number of user's attempt to open the door
 */
var attemptCnt = 0;

/*
 * doorStateToStr : change doorstate(boolean) to string format
 * return : "open" when isDoorOpen is true, "close" when isDoorOpen is false
 */
function doorStateToStr(isDoorOpen)
{
  if(isDoorOpen)return "open";
  else return "close";
}

function OTPCheck(_otp){
  if(otpAPI.getotp() === _otp){
    return true;
  }
  else return false;
}

function ALCheck(){
}

/*
 * GET method
 * return the current status of door, "open" or "close"
 */
router.get('/', function(req, res, next)
{

  // send the door state with string format
//  res.render('index', { title: 'IoT TermProject', door:doorStateToStr(isDoorOpen)});
  res.send(doorStateToStr(isDoorOpen));
  if(isDoorOpen) {
    isDoorOpen = false;
    otpAPI.setOTP("");
  }
});

/*
 * PUT method : OTP attempt
 */
router.put('/', function(req,res)
{
  var otpInput = req.body.pwd;
  if(OTPCheck(otpInput)){
    isDoorOpen=true;
    res.send(true);
  }
  else {
    attemptCnt+=1;
    if(attemptCnt >= 5){
      otpAPI.setotp("");
      attcmptCnt=0;
      res.send(false);
    }
    console.log("OTP is wrong");
    res.send(false);
  }
});

module.exports = router;
