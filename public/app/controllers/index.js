'use strict';
(function () {

    var angular = require('angular');

    // Angular app controllers.
    angular.module('moveApp').controller('AppController', require('./AppController.js')());
    angular.module('moveApp').controller('PostsController', require('./PostsController.js')());

}());
