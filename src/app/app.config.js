'use strict';

angular.module('weatherApp').config([
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
  function config($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('app', {
        abstract: 'true',
        views: {
          '@': {
            template: '<app-base></app-base>'
          }
        }
      })
      .state('app.home', {
        url: '/home',
        views: {
          '@app': {
            template: '<home></home>'
          }
        }
      })
      .state('app.home.location', {
        url: '/location?lat?lon',
        views: {
          '@app': {
            template: '<location></location>'
          }
        }
      });

    $urlRouterProvider.otherwise('/home');
  }
]);
