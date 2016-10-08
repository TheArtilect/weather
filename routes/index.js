var express = require('express');
var router = express.Router();
var https = require('https');
var bl = require('bl');







// http://api.wunderground.com/api/241eebfb8057d10a/features/settings/q/query.format

/* GET home page. */


router.get('/', function(req, res, next) {
  var header = req.headers;
  var ip = header['x-forwarded-for'] || process.env.TEST_IP
  var weatherKey = process.env.UNDERGROUND
  var url = "http://api.wunderground.com/api/" + weatherKey + "/forecast/q/autoip.json?geo_ip=" + ip + ".json"
console.log(url)

/*

  https.get('url', function (response){
    response.setEncoding('utf8');

    response.pipe(bl(function(err, data){
      if (err) throw err;

      var json = JSON.parse(data);
      console.log(data)
    }))


  })

*/
  res.render('index', { title: 'Local Weather', author: "Ian Agpawa", data: "We're getting there" });
});

module.exports = router;
