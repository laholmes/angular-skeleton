'use strict';
/// <reference path="../typings/browser.d.ts" />

var $html = angular.element(document.getElementsByTagName('html')[0]);

angular.element().ready(function() {
    angular.bootstrap(document, ['app']);
});
        
angular.module('app', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
        // Now set up the states
        $stateProvider.state('home', {
            url: '',
            templateUrl: 'src/home/home.html'
        });
    }]);