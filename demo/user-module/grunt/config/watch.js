'use strict';

module.exports = function (grunt) {
    return {
        options: {
            livereload: true
        },
        all: {
            files: [
                'src/**/*.{js,json,html,css}',
                'vendor/bf-module-*/**/*.{js,html,css}',
                'index.html'
            ]
        }
    };
};
