webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

	// requires
	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(9);

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
	            templateUrl: './app/views/friends.html',
	            controller: 'FriendsController'
	        })
	}


	//require('./services');
	// Controllers.
	__webpack_require__(10);
	// Components or Directives.
	__webpack_require__(13);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	(function () {

	    var angular = __webpack_require__(1);

	    // Angular app controllers.
	    angular.module('moveApp').controller('AppController', __webpack_require__(11)());
	    angular.module('moveApp').controller('PostsController', __webpack_require__(12)());
	    angular.module('moveApp').controller('FriendsController', __webpack_require__(16)());
	}());


/***/ },
/* 11 */
/***/ function(module, exports) {

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


/***/ },
/* 12 */
/***/ function(module, exports) {

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


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	(function () {

	    var angular = __webpack_require__(1);

	    // Angular app directives.
	    angular.module('moveApp').directive('friendPost', __webpack_require__(15)());
	    angular.module('moveApp').directive('friendCard', __webpack_require__(17)());
	}());


/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	module.exports = function () {

	    var directive = function () {
	        return {
	            restrict: 'E',
	            templateUrl: 'app/components/friend-post/friend-post.html',
	            scope: {
	                user: '='
	            },
	            replace: true
	        };
	    }

	    return directive;

	};


/***/ },
/* 16 */
/***/ function(module, exports) {

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


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function () {

	    var directive = function () {
	        return {
	            restrict: 'E',
	            templateUrl: 'app/components/friend-card/friend-card.html',
	            scope: {
	                friend: '='
	            },
	            replace: true
	        };
	    }

	    return directive;

	};


/***/ }
]);