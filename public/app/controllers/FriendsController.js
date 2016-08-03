module.exports = function () {

    var FriendsController = function($scope, $http) {

        $scope.friends = [
            {
                name:"Juan Henriquez",
                picture: 'perfil.png',
                status: true,
                mutualFriends: 267,
                posts: 68
            },
            {
                name: "Samuel Alvarez",
                picture: 'perfil.png',
                status: true,
                mutualFriends: 1567,
                posts: 10
            },
            {
                name: "Michel Moreno",
                picture: 'perfil.png',
                status: false,
                mutualFriends: 1,
                posts: 0,
                favorite: true
            },
            {
                name: "Manuel Perez",
                picture: 'perfil.png',
                status: 'false',
                mutualFriends: 2134,
                posts: 1203
            }
        ];
    };

    FriendsController.$inject = ['$scope', '$http'];

    return FriendsController;

}
