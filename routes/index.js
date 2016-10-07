var express = require('express');
var router = express.Router();

var data = "this got passed"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Local Weather', author: "Ian Agpawa", data: data });
});

module.exports = router;
