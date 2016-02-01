/*jshint browser:true */
'use strict';

require('./common.js')();
var demo1 = require('./demo1');
var demo2 = require('./demo2');

angular.element(document).ready(function () {
  angular.bootstrap(document, [demo1.name, demo2.name], {
    //strictDi: true
  });
});