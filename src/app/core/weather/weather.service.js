'use strict';

angular.module('core.weather').factory('Weather', [
  '$resource',
  function($resource) {
    let weatherResource;

    weatherResource = $resource(
      `https://api.openweathermap.org/data/2.5/forecast/daily?cnt=4&&units=imperial&APPID=cd12cb61c3a3512e0ceffa3c71fec447`,
      {},
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
