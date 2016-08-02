var apiKey = require('./../.env').apiKey;
var Temperature = require('./../js/temperature.js').temperatureModule;

$(document).ready(function () {
  $("#temperatureLocation").click(function () {
    var city = $("#location").val();
    $("#location").val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function (response) {
      console.log(response);
      var cityTemp = new Temperature(response.main.temp);
      var cityFahr = cityTemp.toFahrenheit();
      var cityCel = cityTemp.toCelsius();
      $(".showWeather").text("The temperture in " + city + " is " + response.main.temp + " degrees Kevin or " + cityFahr + " degrees Fahrenheit or " + cityCel + " degrees Celsius");
    }).fail(function (error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
