'use strict';

angular.module('website')
    .controller('homeCtrl', ['$scope','$state','$rootScope','$window',
        function ($scope, $state, $rootScope, $window) {
            var self = this;
            self.name = 'home';

        }
	]);