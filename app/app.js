(function () {
    'use strict';
    /*
     */
    var website = angular.module('website', ['ui.router','ui.bootstrap','ngMessages','angular-loading-bar', 'ngMaterial']);

   	website.config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
             $urlRouterProvider.otherwise('/');
             // $locationProvider.html5Mode(true);
        }
    ]);

    website.constant("websiteConstant", {
        "baseUrl": apiEndPointConfig
    });

   	website.run(['$rootScope',
        function ($rootScope) {
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                window.document.title = toState.title + " | Website";
            });
        }
    ]);
}());