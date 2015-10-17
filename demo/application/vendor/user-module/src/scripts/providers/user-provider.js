angular.module('DevFest.User').provider('UserService', function () {

    var name = "";

    // This method will be available on the config phase
    this.setName = function (newName) {
        name = newName;
    };

    // This is the exposed service
    this.$get = function () {
        return {
            getName: function () {
                return name;
            }
        }
    };
});
