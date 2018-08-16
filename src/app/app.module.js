'use strict';

let myApp = angular.module('weatherApp', ['ui.router', 'ngAnimate', 'ngMaterial', 'ngAria', 'core', 'home', 'shared', 'location', 'vsGoogleAutocomplete']);

module.exports = {
  myApp: myApp
};

require('./core/core.module.js');
require('./shared/shared.module.js');
require('./home/home.module.js');
require('./location/location.module.js');
