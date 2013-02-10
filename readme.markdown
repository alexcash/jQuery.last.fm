## jquery.last.fm

A jQuery plugin that populates the given element with album artwork based upon the given parameters. At this time, only for top albums.

### Usage:
```javascript
$('.albums').lfm({
	APIkey:		null,			// [string] required in order to retrieve content from last.fm
	User:			null,			// [string] required username to retrieve data for
	Behavior:	"hover",	// [string] optional controls detail content behavior. can be changed to 'click'
	limit:		20,				// [integer] optional the number of albums you'd like to show. max of 50
	period:		"3month"	// [string] (overall | 7day | 1month | 3month | 6month | 12month) optional the period of time for which to retrieve top albums
});
```

Don't forget to include either style.css or style.scss to get started. If you'd like to do development directly out of this repo you'll need to create a main.js (gitignored) with code formatted as above.

If you'd like to get started without an API key or user to pull from, you can comment out the `var url` line and uncomment the subsequent one to use serverFixture.json. Due to cross domain security restrictions in modern browsers, you'll need to spin up a http server. Given python installed on your system (it comes with mac os) you can run `./bin/server` on the command line to spin up a simple server at `http://localhost:4444`.

If developing right in the repo you'll need to bring your own sass precompiler. I use livereload.

###License:
Copyright © 2013 Alex Cash
Dual licensed under the MIT and GPL licenses.