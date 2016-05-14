/*Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.*/
var gameListApp = angular.module("gamListApp", ['ngRoute']);

gameListApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/apps',
			{
				controller: 'AppsController',
				templateUrl: 'partials/apps-browser.html'
			})
		.otherwise({redirectTo: '/apps' });
}]);

gameListApp.factory("appsFactory", ['$http', function ($http) {
	var factory = {};
	
	factory.getApps = function() {
		return apps;
	};

	return factory;
}]);

gameListApp.controller("AppsController", function($scope, $routeParams, appsFactory) {
		
	$scope.apps =  appsFactory.getApps();
    	
});