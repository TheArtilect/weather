var express = require('express');
var router = express.Router();
var http = require('http');
var bl = require('bl');


/* GET home page. */


router.get('/', function(req, res, next) {
  var header = req.headers;
  var ip = process.env.TEST_IP

  var weatherKey = process.env.UNDERGROUND;
  var url = "http://api.wunderground.com/api/" + weatherKey + "/forecast/q/autoip.json?geo_ip=" + ip + ".json"

  console.log(url)
  http.get(url, function (response){
    response.setEncoding('utf8');

    response.pipe(bl(function(err, data){
      if (err) throw err;

      var json = JSON.parse(data);
      console.log(json)
    })) //  response

    //NEED TO res.render variables in here


  }).on('error', function (e){
    console.log("ERROR: "+ e.message)
  }) // https


  res.render('index', { title: 'Local Weather', author: "Ian Agpawa", data: "We're getting there" });
});

module.exports = router;
