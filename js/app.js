var app = angular.module('ngReddit', ['ngRoute', 'angular-loading-bar']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: 'partials/main.html',
			controller: 'ApiCtrl'
		})
		.when('/about',
		{
			templateUrl: 'partials/about.html',
			controller: 'AboutCtrl'
		})
		.otherwise(
		{
			redirectTo: '/404',
			templateUrl: 'partials/404.html'
		});
});

//////////////////
// CONTROLLERS //
////////////////

app.controller('ApiCtrl', ['apiService', function (apiService) {
	var self = this;

	self.rAngular = apiService.then(function(result) {
		self.rAngular = result[0].data.data.children;
	});

	self.rJS = apiService.then(function(result) {
		self.rJS = result[1].data.data.children;
	});

	self.rNode = apiService.then(function(result) {
		self.rNode = result[2].data.data.children;
	});

	self.rLearnJS = apiService.then(function(result) {
		self.rLearnJS = result[3].data.data.children;
	});

	self.rWebDesign = apiService.then(function(result) {
		self.rWebDesign = result[4].data.data.children;
	});

	self.rWebDev = apiService.then(function(result) {
		self.rWebDev = result[5].data.data.children;
	});
}]);

app.controller('AboutCtrl', ['aboutService', function (aboutService) {
	var self = this;

	self.list = function() {
		return aboutService.list();
	};
	
}]);

/////////////////
// DIRECTIVES //
///////////////

app.directive('showSubreddits', function(){
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/mainContent.html',
		replace: true
	};
});

app.directive('subredditPosts', function(){
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/subredditPosts.html',
		replace: true
	};
});

app.directive('about', function(){
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/aboutContent.html',
		replace: true
	};
});
