// api/ShowError.js

var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');

router.get('/:m', function (req,res){
  let message = req.params.m;
  console.log("error message : " + message);
  res.send("");
});

module.exports = router;
