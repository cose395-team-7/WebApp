var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var otp = req.body.otp;
  res.render('index', { title: 'IoT TermProject'});
});

module.exports = router;
