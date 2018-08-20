'use strict';

angular.module('sign-in').component('signIn', {
  templateUrl: 'app/sign-in/sign-in.component.html',
  controllerAs: 'signInVm',
  bindings: {},
  controller: [
    'Oauth',
    function SignInController(Oauth) {
      let signInVm = this;

      signInVm.test = {};
    }
  ]
});
