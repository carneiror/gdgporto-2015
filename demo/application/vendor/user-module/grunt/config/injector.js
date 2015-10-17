'use strict';

var path = require('path');

module.exports = function () {
    return {
        options: {
            template: 'index.html',
            sort: function (a, b) {
                return a.split('/').length - b.split('/').length;
            }
        },
        server: {
            options: {
                ignorePath: ['']
            },
            files: {
                'index.html': [
                    'src/scripts/application.js',
                    'src/**/*.js',
                    'src/assets/**/*.css'
                ]
            }
        }
    };
};
