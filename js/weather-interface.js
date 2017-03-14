var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  currentWeatherObject.getWeather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $('.showTemperature').text("The temperature in " + city + " is " + (response.main.temp * (9/5) - 459.67));
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
