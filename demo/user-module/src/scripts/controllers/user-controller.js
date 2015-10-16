angular.module('DevFest.User').controller('UserController', [
    '$scope',
    'UserService',
    function ($scope, userService) {
        'use strict';

        $scope.name = userService.getName();
    }
]);
