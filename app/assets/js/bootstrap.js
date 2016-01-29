/*jshint browser:true */
'use strict';

require('./common.js')();
var appModule = require('./main');

angular.element(document).ready(function () {
  angular.bootstrap(document, [appModule.name], {
    //strictDi: true
  });
});