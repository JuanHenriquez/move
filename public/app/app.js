var app = angular.module('moveApp', ['ngMaterial']);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey', {
            'default': '900',
            'hue-1': '800',
            'hue-2': '600'
        })
        .accentPalette('pink')
        .warnPalette('deep-orange');
});

app.controller('AppController', ['$scope', function ($scope) {
    $scope.username = "Juan Henriquez";
    $scope.userEmail = "juanhenriquezzavarse18@gmail.com"
}]);
