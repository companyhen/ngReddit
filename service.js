app.factory('apiService', ['$http', '$q', function ($http, $q) {

	var subreddits = [
		{ name: 'angularjs' },
		{ name: 'javascript' },
		{ name: 'node' },
		{ name: 'learnjavascript' },
		{ name: 'web_design' },
		{ name: 'webdev' }
	];	
	
	var groupedSubredditData = [];

	function listSubreddits() {
		for(i = 0; i < subreddits.length; i++) {
			subreddit = subreddits[i].name;
			groupedSubredditData[i] = $http.get('https://www.reddit.com/r/' + subreddit + '/top.json?t=day&limit=10');
		}
		return $q.all(groupedSubredditData);
	}

	return listSubreddits();
}]);

app.factory('aboutService', function() {

	var people = ["Pam L.", "Miesha W.", "Ben B.", "Zac C."];

	return {
		list: function() {
			return people;
		}
	};
	
});