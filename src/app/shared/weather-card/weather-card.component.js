'use strict';

angular.module('weatherCard').component('weatherCard', {
  templateUrl: 'app/shared/weather-card/weather-card.component.html',
  controllerAs: 'weatherCardVm',
  bindings: {
    location: '<',
    onlyContent: '<',
    onLoaded: '&'
  },
  controller: [
    'Weather',
    'weatherSvc',
    function WeatherCardController(Weather, weatherSvc) {
      let weatherCardVm = this;
      weatherCardVm.weather = {};

      weatherCardVm.$onChanges = function(changes) {
        if ('location' in changes && weatherCardVm.location) {
          loadWeatherList(weatherCardVm.location);
        }
      };

      function loadWeatherList(location) {
        let lat = location.lat;
        let lon = location.lon;
        Weather.weather.getAll({ lat: lat, lon: lon }).$promise.then(response => {
          weatherCardVm.weather = weatherSvc.decorateWeather(response);
          weatherCardVm.onLoaded({event:weatherCardVm.weather})
        }).catch(function(err) {
          console.log(err, 'error: geocoding requires latitude and longitude');
        });
      }
    }
  ]
});
