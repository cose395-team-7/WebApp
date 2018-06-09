// api/alcohol.js

var express = require('express');
var router = express.Router();

var alcoholConcentration = 0.0;

function getAlc(){
  return alcoholConcentration;
}

function setAlc(_alcoholConcentration){
  alcoholConcentration = _alcoholConcentration;
}

router.put('/', function (req,res){
  alcoholInput=req.body.value;
  setAlc(alcoholInput);
  res.send(alcoholConcentration);
});

module.exports = router;
export.getalc=getAlc;
