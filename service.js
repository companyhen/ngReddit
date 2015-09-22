app.factory('apiService', ['$http', function ($http) {

	for(i = 0; i < self.subreddits.length; i++) {
		subreddit = self.subreddits[i].name;
		return $http.get('https://www.reddit.com/r/' + subreddit + '/.json');
	}

}]);
