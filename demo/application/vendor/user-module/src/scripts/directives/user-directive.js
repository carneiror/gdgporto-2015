angular.module('DevFest.User').directive('user', function () {
    return {
        template: '<div class="user-module"><b>{{ name }}</b></div>',
        controller: 'UserController'
    }
});
