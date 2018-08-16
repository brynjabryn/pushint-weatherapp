'use strict';

angular.module('core.weather').factory('Weather', [
  '$resource',
  function($resource) {
    let weatherResource;
    weatherResource = $resource(
      'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=cd12cb61c3a3512e0ceffa3c71fec447&lat=:lat&lon=:lon',
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