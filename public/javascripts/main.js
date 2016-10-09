function displayAll(){

  var weatherObj = local_data
  var day = weatherObj.weekday;
  var ftext = weatherObj.ftext;
  var high = weatherObj.high
  var highF = JSON.stringify(parseInt(high.fahrenheit));
  var low = weatherObj.low
  var lowF = JSON.stringify(parseInt(low.fahrenheit));
  var conditions = weatherObj.conditions
  var icon = weatherObj.icon
  var icon_url = weatherObj.icon_url


  $("#conditions").html(conditions)
  $("#icon").attr('src', icon_url)
  $("#high").html("High: " + highF + "&#8457;")
  $("#low").html("Low: " + lowF + "&#8457;")
  $("#text").html(ftext)
  $("#day").html(day)

  $("#convert").on('click', function(){
    if (highF == JSON.stringify(parseInt(high.fahrenheit))){
      highF = JSON.stringify(parseInt(high.celsius));
      lowF = JSON.stringify(parseInt(low.celsius))
      $("#convert").html("Convert to Fahrenheit");
      $("#high").html("High: " + highF + "&#8451;")
      $("#low").html("Low: " + lowF + "&#8451;")
    } else {
      highF = JSON.stringify(parseInt(high.fahrenheit));
      lowF = JSON.stringify(parseInt(low.fahrenheit));
      $("#convert").html("Convert to Celsius");
      $("#high").html("High: " + highF + "&#8457;")
      $("#low").html("Low: " + lowF + "&#8457;")
    } // else
  }) // convert click


} // displayAll







$(document).ready(displayAll);
$(document).on('page:load', displayAll);
