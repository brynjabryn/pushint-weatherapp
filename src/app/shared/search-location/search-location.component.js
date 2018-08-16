'use strict';

angular.module('shared.search-location').component('searchLocation', {
  templateUrl: 'app/shared/search-location/search-location.component.html',
  controllerAs: 'searchLocationVm',
  bindings: {
    weather: '<'
  },
  controller: [
    '$state',
    '$scope',
    function SearchLocationController($state, $scope) {
      let searchLocationVm = this;

      searchLocationVm.search = {
        name: '',
        place: '',
        components: {
          placeId: '',
          streetNumber: '',
          street: '',
          city: '',
          state: '',
          countryCode: '',
          country: '',
          postCode: '',
          district: '',
          location: {
            lat: 0,
            long: 0
          }
        }
      };

      $scope.$watch(
        'searchLocationVm.search.components.location.lat',
        function() {
          let lat = searchLocationVm.search.components.location.lat;
          let long = searchLocationVm.search.components.location.long;
          if (searchLocationVm.search.components.location.lat !== 0 && searchLocationVm.search.components.location.long !== 0) {
            $state.go('app.home.location', { lat: lat, lon: long });
          }
        },
        true
      );
    }
  ]
});
