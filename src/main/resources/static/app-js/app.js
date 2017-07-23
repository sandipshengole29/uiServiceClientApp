'use strict';

var app = angular.module('app', ['ui.router', 'ngAnimate']);

app.config(function($locationProvider, $urlRouterProvider, $stateProvider) {

	$stateProvider.state('login-page', {
		url : '/login-page',
		templateUrl : 'view-lib/common-pages/login-page.html',
		controller : 'loginPageController'
	});
	
	$stateProvider.state('landing-page', {
		url : '/landing-page',
		templateUrl : 'view-lib/common-pages/landing-page.html',
		controller : 'landingPageController'
	});
	
	$stateProvider.state('xmlPocStart-page', {
		url : '/xmlPocStart-page',
		templateUrl : 'view-lib/poc-pages/xmlPocStart-page.html',
		controller : 'xmlPocPageController'
	})
	
	$urlRouterProvider.otherwise('/login-page');
	$locationProvider.html5Mode(false);
});