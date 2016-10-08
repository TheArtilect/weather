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





  http.get(url, function (response){
    var readings = {}//{high: 'yes', low: 'no'};
    response.setEncoding('utf8');

    response.pipe(bl(function(err, data){
      if (err) throw err;

      var json = JSON.parse(data).forecast;
      var day = json.simpleforecast.forecastday[0]
      var dayT = json.txt_forecast.forecastday[0]


      readings = {
        weekday: dayT.title,
        ftext: dayT.fcttext,
        high: day.high, // { faren: x, cel: y}
        low: day.low, // {faren: x, cel: y}
        conditions: day.conditions,
        icon: day.icon,
        icon_url: day.icon_url
      }
      console.log(readings)

      res.render('index', { title: 'Local Weather', author: "Ian Agpawa", data: readings });

    })) //  response

    //NEED TO res.render variables in here


  }).on('error', function (e){
    console.log("ERROR: "+ e.message)
  }) // https



});

module.exports = router;
