function displayAll(){

  function stringy(str){
    return JSON.stringify(parseInt(str))
  }

  var weatherObj = local_data
  var day = weatherObj.weekday;
  var ftext = weatherObj.ftext;
  var high = weatherObj.high
  var highF = stringy(high.fahrenheit);
  var low = weatherObj.low
  var lowF = stringy(low.fahrenheit);
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
    if (highF == stringy(high.fahrenheit)){
      highF = stringy(high.celsius);
      lowF = stringy(low.celsius);
      $("#convert").html("Fahrenheit");
      $("#high").html("High: " + highF + "&#8451;")
      $("#low").html("Low: " + lowF + "&#8451;")
    } else {
      highF = stringy(high.fahrenheit);
      lowF = stringy(low.fahrenheit);
      $("#convert").html("Celsius");
      $("#high").html("High: " + highF + "&#8457;")
      $("#low").html("Low: " + lowF + "&#8457;")
    } // else
  }) // convert click


} // displayAll







$(document).ready(displayAll);
$(document).on('page:load', displayAll);
