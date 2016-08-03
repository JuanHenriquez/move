module.exports = function() {

    var AppController = function ($scope, $mdMedia, $mdSidenav) {
        $scope.user = {
            username: "Juan Henriquez",
            userEmail: "juanhenriquezzavarse18@gmail.com",
            numFriends: 48,
            numPosts: 500,
            numNotifications: 5,
            sideNavOpen: $mdMedia('gt-md')
        };

        $scope.toggleSidenav = function (navId) {
            $mdSidenav(navId).toggle();
        }

    };

    AppController.$inject = ['$scope', '$mdMedia', '$mdSidenav'];

    return AppController;

};
