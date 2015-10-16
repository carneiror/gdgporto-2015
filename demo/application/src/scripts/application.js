angular.module('DevFest', [
    'DevFest.User' // This is not implemented on this project, is an external module (see bower.json)
]);

angular.module('DevFest').config(['UserServiceProvider', function (userServiceProvider) {
    userServiceProvider.setName('John Doe');
}]);
