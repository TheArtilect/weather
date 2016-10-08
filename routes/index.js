var express = require('express');
var router = express.Router();
var https = require('https')

var data = "this got passed";

/* GET home page. */


router.get('/', function(req, res, next) {
  var header = req.headers;
  var ip = header['x-forwarded-for'] || "64.131.162.208";
  console.log(ip)

  res.render('index', { title: 'Local Weather', author: "Ian Agpawa", data: data });
});

module.exports = router;
