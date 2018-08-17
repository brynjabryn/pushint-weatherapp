'use strict';

angular.module('location').component('location', {
  templateUrl: 'app/location/location.component.html',
  controllerAs: 'locationVm',
  controller: [
    '$timeout',
    '$state',
    'weatherSvc',
    'Weather',
    function LocationController($timeout, $state, weatherSvc, Weather) {
      let locationVm = this;
      location.weather = {};
      locationVm.location = { lat: $state.params.lat, lon: $state.params.lon };

      locationVm.getWeatherData = function(event) {
        $timeout(function() {
          locationVm.weather = event;
          console.log("weather updated?", locationVm.weather);
        }, 100);
      }
    }
  ]
});
