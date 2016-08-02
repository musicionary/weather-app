var apiKey = require('./../.env').apiKey;

var latitude;
var longitude;
navigator.geolocation.getCurrentPosition(function(position){
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
});

$(document).ready(function () {
  $("#weatherLocation").click(function () {
    var city = $("#location").val();
    console.log(city);
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $("#location").val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function (response) {
      $(".showWeather").text("The humidity in " + city + " is " + response.main.humidity + "% and the wind speed is " + response.wind.speed + " m/s in a direction of " + response.wind.deg + " degrees");
    }).fail(function (error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });


  $("#weatherCoordinates").click(function () {
    $.get('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey)
    .then(function (response) {
      $(".showWeather").text("The humidity at longitude/latitude: " + latitude + "/" + longitude + " is " + response.main.humidity + "%");
    })
    .fail(function (error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
