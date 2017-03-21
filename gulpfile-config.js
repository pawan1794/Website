(function () {
    'use strict';

    module.exports = {

        alljs: ['app/app.js', 'app/**/*.js', 'assets/directives/*.js'],
        css: ['./main.css'],
        index: './index.html',
        allhtml: ['index.html', 'app/**/*.html'],
        htmltemplates: './app/**/*.html',

        getWiredepDefaultOptions: function () {
            var options = {
                bowerJson: require('./bower.json'),
                directory: './bower_components',
                cwd: './',
                relative: true
            };
            return options;
        }
    };
}());