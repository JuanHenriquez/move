var angular = require('angular');

// requires
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-ui-router');

var app = angular.module('moveApp', ['ngMaterial', 'ui.router']);

appConfig.$inject = ['$mdThemingProvider', '$stateProvider', '$urlRouterProvider'];

app.config(appConfig);

function appConfig ($mdThemingProvider, $stateProvider, $urlRouterProvider) {

    // Config the app theme.
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey', {
            'default': '900',
            'hue-1': '800',
            'hue-2': '600',
            'hue-3': '50'
        })
        .accentPalette('pink')
        .warnPalette('deep-orange');


    // Config the app SPA routes.
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './app/views/home.html',
            controller: 'PostsController'
        })

        .state('friends', {
            url: '/friends',
            templateUrl: './app/views/friends.html'
        })
}

// Services.
require('./services');
// Controllers.
require('./controllers');
// Components or Directives.
require('./components');
