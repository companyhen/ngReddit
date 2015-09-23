var app = angular.module('ngReddit', ['ngRoute']);

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

	self.getSubs = apiService.then(function(result) {
		self.getSubs = result[0].data.data.children;
		console.log(result[0].data.data.children);
	});

}]);

app.directive('submission', function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/submissionContent.html',
		replace: true
	};
});

app.directive('selectSubreddit', function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/mainContent.html',
		replace: true
	};
});
