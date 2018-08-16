'use strict';

angular.module('home').component('home', {
  templateUrl: 'app/home/home.component.html',
  controllerAs: 'homeVm',
  controller: [
    'Weather',
    function HomeController(Weather) {
      let homeVm = this;
      homeVm.locations = [
        { cid: 2643743, coordinates: { lat: 51.5073509, lon: -0.12775829999998223 } },
        { cid: 2655984, coordinates: { lat: 54.59728500000001, lon: -5.930119999999988 } },
        { cid: 6545310, coordinates: { lat: 52.52000659999999, lon: 13.404953999999975 } },
        { cid: 4839366, coordinates: { lat: 41.308274, lon: -72.92788350000001 } },
        { cid: 5346462, coordinates: { lat: 37.831316, lon: -122.28524729999998 } },
        { cid: 5391959, coordinates: { lat: 37.7749295, lon: -122.41941550000001 } }
      ];
    }
  ]
});
