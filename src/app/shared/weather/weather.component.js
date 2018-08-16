'use strict';

angular.module('shared.weather').component('weather', {
  templateUrl: 'app/shared/weather/weather.component.html',
  controllerAs: 'weatherVm',
  bindings: {
    weather: '<'
  },
  controller: [function WeatherController() {}]
});
