'use strict';
(function () {

    var angular = require('angular');

    // Angular app controllers.
    angular.module('moveApp').controller('AppController', require('./AppController')());
    angular.module('moveApp').controller('PostsController', require('./PostsController')());
    angular.module('moveApp').controller('FriendsController', require('./FriendsController')());
}());
