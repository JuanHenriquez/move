module.exports = function () {

    var directive = function () {
        return {
            restrict: 'E',
            templateUrl: 'app/components/postFriendDirective/postFriendTemplate.html',
            scope: {
                user: '='
            },
            replace: true
        };
    }

    return directive;

};
