app.factory('apiService', ['$http', '$q', function ($http, $q) {

	var subreddits = [
		{ name: 'angularjs' },
		{ name: 'learnjavascript' },
		{ name: 'learnprogramming' },
		{ name: 'javascript' },
		{ name: 'web_design' },
		{ name: 'webdev' }
	];	
	
	var groupedSubredditData = [];

	function listSubreddits() {
		for(i = 0; i < subreddits.length; i++) {
			subreddit = subreddits[i].name;
			groupedSubredditData[i] = $http.get('https://www.reddit.com/r/' + subreddit + '/.json?limit=10');
		}
		return $q.all(groupedSubredditData);
	}

	return listSubreddits();
}]);
