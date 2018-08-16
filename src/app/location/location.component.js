'use strict';

angular.module('location').component('location', {
  templateUrl: 'app/location/location.component.html',
  controllerAs: 'locationVm',
  controller: [
    '$stateParams',
    'weatherSvc',
    'Weather',
    '$timeout',
    function LocationController($timeout, $stateParams, weatherSvc, Weather) {
      let locationVm = this;
      location.weather = {};
      locationVm.location = { lat: $stateParams.lat, lon: $stateParams.lon };

      locationVm.getWeatherData = function(event) {
        $timeout(function() {
          locationVm.weather = event;
        }, 100);
      }
    }
  ]
});
