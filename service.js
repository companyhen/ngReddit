app.factory('apiService', ['$http', function ($http) {

	self.subreddits = [
		{ name: 'angularjs' },
		{ name: 'learnjavascript' },
		{ name: 'learnprogramming' },
		{ name: 'javascript' },
		{ name: 'web_design' },
		{ name: 'webdev' }
	];	

	function listSubreddits() {
		for(i = 0; i < self.subreddits.length; i++) {
			subreddit = self.subreddits[i].name;
			return $http.get('https://www.reddit.com/r/' + subreddit + '/.json?limit=10');
		}
	}

	return listSubreddits();

}]);
