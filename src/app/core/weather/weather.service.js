'use strict';

angular.module('core.weather').factory('Weather', [
  '$resource', '$stateParams',
  function($resource, $stateParams) {
    let weatherResource;
      console.log("weatherResource request", $stateParams.lat, $stateParams.lon);

    weatherResource = $resource(
      `https://api.openweathermap.org/data/2.5/forecast/daily?cnt=4&&units=imperial&APPID=cd12cb61c3a3512e0ceffa3c71fec447`,
      {
        lat: $stateParams.lat, 
        lon: $stateParams.lon
      },
      {
        getAll: {
          method: 'GET'
        }
      }
    );
    return {
      weather: weatherResource
    };
  }
]);
