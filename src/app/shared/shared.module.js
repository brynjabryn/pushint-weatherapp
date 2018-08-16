'use strict';

angular.module('shared', ['weatherCard', 'shared.weather', 'shared.search-location']);

require('./weather-card/weather-card.module.js');
require('./weather/weather.module.js');
require('./search-location/search-location.module.js');
