// api/alcohol.js

var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');

var MIN_THRESHOLD = 80;
var MAX_THRESHOLD = 150;
var MIN_INIT = 150;
var MAX_INIT = -1;

var maxAlcoholConcentration = MAX_INIT;
var minAlcoholConcentration = MIN_INIT;
var t = new Date();

router.getTimeForAlc = function getTimeForAlcohol(){
  return t;
}

router.getalcMax = function getAlcMax(){
  return maxAlcoholConcentration;
}

router.getalcMin = function getAlcMin(){
  return minAlcoholConcentration;
}

router.resetAl = function resetAlcohol(){
  t = new Date();
  maxAlcoholConcentration = MAX_INIT;
  minAlcoholConcentration = MIN_INIT;
}

function setAlc(_alcoholConcentration){
  if(_alcoholConcentration > maxAlcoholConcentration) maxAlcoholConcentration = _alcoholConcentration;
  if(_alcoholConcentration < minAlcoholConcentration) minAlcoholConcentration = _alcoholConcentration;
}

router.get('/:value', function (req,res){
  alcoholInput=req.params.value;
  alcoholInput *= 1;
  setAlc(alcoholInput);
  if(alcoholInput < MIN_THRESHOLD || alcoholInput > MAX_THRESHOLD){
    t = new Date();
  }
  console.log("max : " + maxAlcoholConcentration + ", min : " + minAlcoholConcentration + ", cur : " + alcoholInput);
  res.sendStatus(200);
});

module.exports = router;
