'use strict';

var path = require('path');
var wiredep = require('wiredep');
var dependencies = wiredep().js.map(function (filepath) {
    return filepath.replace(path.normalize(__dirname + '../../../'), '');
});

module.exports = function (grunt) {
    // Sort source file so we don't have dependency errors just before the include order
    var sourceFilesSorted = grunt.file.expand(['src/**/*.js']).sort(function (a, b) {
        return a.split('/').length - b.split('/').length;
    });

    return {
        options: {
            frameworks: ['jasmine'],
            browsers: ['PhantomJS'],
            basePath: './',
            files: dependencies.concat([
                'tests/unit/**/*.js'
            ]).concat(sourceFilesSorted),
            coverageReporter: {
                dir: '.'
            },
            preprocessors: {
                'src/**/*.js': ['coverage']
            }
        },
        continuous: {
            singleRun: false,
            reporters: ['progress', 'coverage'],
            coverageReporter: {
                reporters: [
                    { type: 'html' },
                    { type: 'text-summary' }
                ]
            }
        }
    };
};
