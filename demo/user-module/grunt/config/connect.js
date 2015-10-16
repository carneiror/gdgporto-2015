'use strict'

module.exports = function (grunt) {

    return {
        server: {
            options: {
                livereload: true,
                open: true,
                base: '.',
                port: '8080',
                hostname: 'localhost'
            }
        }
    };
}
