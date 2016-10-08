function displayAll(){

  var weatherObj = local_data
  var day = weatherObj.weekday;
  var ftext = weatherObj.ftext;
  var high = weatherObj.high
  var low = weatherObj.low
  var conditions = weatherObj.conditions
  var icon = weatherObj.icon
  var icon_url = weatherObj.icon_url


  $("#conditions").text(conditions)
  $("#icon").attr('src', icon_url)
  $("#high").text(JSON.stringify(parseInt(high.fahrenheit)))
  $("#low").text(JSON.stringify(parseInt(low.fahrenheit)))
  $("#text").text(ftext)
  $("#day").text(day)



}







$(document).ready(displayAll);
$(document).on('page:load', displayAll);
