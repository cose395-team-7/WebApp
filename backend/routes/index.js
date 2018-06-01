var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  req.accepts('application/json');
  otp = req.body;
  res.render('index', { title: 'IoT TermProject', otp:otp});
});

module.exports = router;
