app.factory('apiService', ['$http', function ($http) {

	self.subreddits = [
		{ name: 'angularjs' },
		{ name: 'learnjavascript' },
		{ name: 'learnprogramming' },
		{ name: 'javascript' },
		{ name: 'web_design' },
		{ name: 'webdev' }
	];	
	self.groupedSubredditData=[];
	function listSubreddits() {
		for(i = 0; i < self.subreddits.length; i++) {
			subreddit = self.subreddits[i].name;
			self.groupedSubredditData[i] = $http.get('https://www.reddit.com/r/' + subreddit + '/.json?limit=10');
			console.log(self.groupedSubredditData);
			
		}
		return $http.get('https://www.reddit.com/r/' + subreddit + '/.json?limit=1000');
		
	}

	return listSubreddits();
	
}]);
