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
