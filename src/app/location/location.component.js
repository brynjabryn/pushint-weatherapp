'use strict';

angular.module('location').component('location', {
  templateUrl: 'app/location/location.component.html',
  controllerAs: 'locationVm',
  controller: [
    '$stateParams',
    'weatherSvc',
    'Weather',
    '$timeout',
    '$state',
    function LocationController($timeout, $stateParams, weatherSvc, Weather, $state) {
      let locationVm = this;
      location.weather = {};
      locationVm.location = { lat: $stateParams.lat, lon: $stateParams.lon };
      console.log($stateParams);
      console.log($state.params);
      console.log("locationVm.location", locationVm.location);
    

      locationVm.getWeatherData = function(event) {
        $timeout(function() {
          locationVm.weather = event;
        }, 100);
      }
    }
  ]
});
