'use strict';

// when requirejs integrated
//define([
//	'angular',
//	'angularRoute'
//], function(angular, angularRoute) {
//	return angular.module('app', ['uiRouter'])

var $html = angular.element(document.getElementsByTagName('html')[0]);
angular.element().ready(function() {
    angular.bootstrap(document, ['app']);
});
        
angular.module('app', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
        // Now set up the states
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home/home.html'
        });
    }]);