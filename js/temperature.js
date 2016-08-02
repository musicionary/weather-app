function Temperature(kelvin) {
  this.kelvin = parseInt(kelvin);
}

Temperature.prototype.toCelsius = function() {
  var celsius = Math.floor(this.kelvin - 273.15);
  return celsius;
};

Temperature.prototype.toFahrenheit = function() {
  var fahrenheit = Math.floor(this.kelvin * (9/5) - 459.67);
  return fahrenheit;
};

exports.temperatureModule = Temperature;
