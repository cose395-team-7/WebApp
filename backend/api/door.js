// api/door.js

var express = require('express');
var router = express.Router();
var otpAPI = require('door');

/*
 * isDoorOpen : variable that represents the door state. true - open, false - close
 */
var isDoorOpen = false;

/*
 * doorStateToStr : change doorstate(boolean) to string format
 * return : "open" when isDoorOpen is true, "close" when isDoorOpen is false
 */
function doorStateToStr(isDoorOpen){
  if(isDoorOpen)return "open";
  else return "close";
}

/*
 * GET method
 * return the current status of door, "open" or "close"
 */
router.get('/', function(req, res, next) {

  /*
   * send the door state with string format
   */
  res.render('index', { title: 'IoT TermProject', door:doorStateToStr(isDoorOpen)});
  res.send(doorStateToStr(isDoorOpen));
});

/*
 * PUT method
 *
 */
router.put('/', function(req,res){
});

module.exports = router;
