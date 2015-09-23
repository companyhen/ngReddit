var app = angular.module('ngReddit', ['ngRoute', 'angular-loading-bar']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: 'partials/main.html',
			controller: 'MainCtrl'
		})
		.when('/subreddit',
		{
			templateUrl: 'partials/subreddit.html',
			controller: 'MainCtrl'
		})
		.otherwise(
		{
			redirectTo: '/404',
			templateUrl: 'partials/404.html'
		});
});

app.controller('MainCtrl', function(){
	self = this;
});

app.controller('ApiCtrl', ['apiService', function (apiService) {
	var self = this;

	self.rAngular = apiService.then(function(result) {
		// for (i = 0; i < 6; i++) {
		// 	self.getSubs = result[i].data.data.children;
		// 	console.log(self.getSubs);
		// }
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

app.directive('submission', function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/submissionContent.html',
		replace: true
	};
});

app.directive('showSubreddits', function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/mainContent.html',
		replace: true
	};
});

app.directive('subredditPosts', function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/subredditPosts.html',
		replace: true
	};
});
