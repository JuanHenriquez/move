'use strict';
(function () {

    var angular = require('angular');

    // Angular app directives.
    angular.module('moveApp').directive('friendPost', require('./friend-post')());
    angular.module('moveApp').directive('friendCard', require('./friend-card')());
}());
