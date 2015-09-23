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

app.controller('ApiCtrl', ['$http', 'apiService', function ($http, apiService) {
	var self = this;

	self.getSubs = apiService;

	console.log(self.getSubs);

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
