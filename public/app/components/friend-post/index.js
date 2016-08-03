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
