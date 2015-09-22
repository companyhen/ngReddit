app.factory('apiService', ['$http', function ($http) {

	self.subreddits = [
		{ name: 'angularjs' },
		{ name: 'learnjavascript' },
		{ name: 'learnprogramming' },
		{ name: 'javascript' },
		{ name: 'web_design' },
		{ name: 'webdev' }
	];
	
	self.subReddits = [];

	function listSubreddits() {
		for(i = 0; i < self.subreddits.length; i++) {
			subreddit = self.subreddits[i].name;
			// Return will exit loop 
			// Save to a variable so you can return the list
			
			self.subReddits[i] = $http.get('https://www.reddit.com/r/' + subreddit + '/.json?limit=10');
			//return $http.get('https://www.reddit.com/r/' + subreddit + '/.json?limit=10');
		}
	}

	return self.subReddits;
	//return listSubreddits();

}]);
