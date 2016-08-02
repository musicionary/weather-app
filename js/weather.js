var apiKey = require('./../.env').apiKey;

var latitude;
var longitude;
navigator.geolocation.getCurrentPosition(function(position){
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
});
