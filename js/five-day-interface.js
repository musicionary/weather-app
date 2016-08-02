var apiKey = require('./../.env').apiKey;
var Temperature = require('./../js/temperature.js').temperatureModule;

$(document).ready(function () {
  $("#fiveDayLocation").click(function () {
    var city = $("#location").val();
    $("#location").val("");
    $.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=5&appid=' + apiKey).then(function (response) {
      console.log(response);
      for (var i = 0; i < (response.list).length; i++) {
        var newTemp = new Temperature(response.list[i].temp.day);

        $('#fiveDayForecast').append('<div class="col-sm-2">' +
                                      '<p>Time: ' + moment(response.list[i].dt).format() + '</p>' +
                                      '<p>Temperature: ' + newTemp.toFahrenheit() + '&deg;</p>' +
                                      '<p>Chance of Clouds: ' + response.list[i].clouds + '%</p>' +
                                      '<p>Conditions: ' + response.list[i].weather[0].main + '</p>' +
                                    '</div>');
      }
      // var allTemp = new Temperature(response.list.main.temp);
      // var allFahr = allTemp.toFahrenheit();
      // var allCel = allTemp.toCelsius();
      // $(".showWeather").text("The temperature in " + city + " is " + response.list.main.temp + " degrees Kevin or " + allFahr + " degrees Fahrenheit or " + allCel + " degrees Celsius");
    }).fail(function (error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
