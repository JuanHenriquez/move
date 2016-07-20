'use strict';
(function () {

    var angular = require('angular');

    // Angular app directives.
    angular.module('moveApp').directive('postCard', require('./postFriendDirective')());

}());
