require('../node_modules/angular/angular.js');

require('../node_modules/angular-resource/angular-resource.js');
require('../node_modules/@uirouter/angularjs/release/angular-ui-router.js');
require('../node_modules/angular-aria/angular-aria.js');
require('../node_modules/angular-animate/angular-animate.js');
require('../node_modules/angular-material/angular-material.js');

require('expose-loader?entry!./app/app.module.js');

function importAll(r) {
  r.keys().forEach(function(file) {
    r(file);
  });
}

importAll(require.context('imports-loader?myApp=>entry.myApp!./app/', true, /^(?!.*\.module\.js$)^(?!.*\.spec\.js$).*\.js$/));
