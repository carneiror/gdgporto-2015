'use strict';

var path = require('path');

module.exports = function (grunt) {

    // Load Grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt', 'config'),
        init: true
    });

    // Load grunt tasks that cannot be loaded with "load-grunt-tasks"
    grunt.loadNpmTasks("gruntify-eslint");

    // Run tests without single run. Useful for development.
    grunt.registerTask('test', [
        'karma:continuous'
    ]);

    // Serve the GDG site for development
    grunt.registerTask('serve', [
        'injector:server',
        'wiredep:server',
        'connect',
        'watch'
    ]);
};
