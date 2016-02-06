// var requirejs = require('requirejs');

// requirejs.config({
// 	paths: {
//         nodeRequire: require,
//         // dont look in npm
// 		// angular: './angular/angular',
// 		// uiRouter: './angular-ui-router/release/angular-ui-router',
// 		// text: './requirejs-text/text'
// 	},
// 	shim: {
// 		'angular' : {'exports' : 'angular'},
// 		'angularRoute': ['angular']		
// 	},
// 	priority: [
// 		'angular'
// 	],
// 	deps: window.__karma__ ? allTestFiles : [],
// 	callback: window.__karma__ ? window.__karma__.start : null,
// 	baseUrl: window.__karma__ ? '/base/app' : '',
// });

// requirejs([
// 	'angular',
// 	'app'
// 	], function(angular, app) {
// 		var $html = angular.element(document.getElementsByTagName('html')[0]);
// 		angular.element().ready(function() {
// 			// bootstrap the app manually
// 			angular.bootstrap(document, ['app']);
// 		});
// 	}
// );