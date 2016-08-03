module.exports = function () {

    var PostController = function($scope, $http) {

        $scope.posts = [
            {
                name:"Juan Henriquez",
                date: "Today",
                picture: 'perfil.png',
                numLikes: 50,
                numComments: 30,
                comment: "Este es un simple comentario.",
                comments: [
                    {
                        author: "Samuel Murillo",
                        text: "Texto jajajaja",
                        authorPicture: "perfil.png"
                    },
                    {
                        author: "Movia",
                        text: "Texto 2 jajajaja",
                        authorPicture: "perfil.png"
                    },
                    {
                        author: "Erika Gutierrez",
                        text: "Texto 3 jajajaja",
                        authorPicture: "perfil.png"
                    }
                ]
            },
            {
                name:"Juan Henriquez",
                date: "Today",
                picture: 'perfil.png',
                numLikes: 50,
                numComments: 30,
                comment: "Este es un simple comentario.",
                comments: [
                    {
                        author: "Samuel Murillo",
                        text: "Texto jajajaja",
                        authorPicture: "perfil.png"
                    },
                    {
                        author: "Movia",
                        text: "Texto 2 jajajaja",
                        authorPicture: "perfil.png"
                    },
                    {
                        author: "Erika Gutierrez",
                        text: "Texto 3 jajajaja",
                        authorPicture: "perfil.png"
                    }
                ]
            }
        ];

    }

    PostController.$inject = ['$scope', '$http'];

    return PostController;

};
