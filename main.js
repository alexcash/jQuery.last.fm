//var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=" + user + "&period=3month&api_key=" + APIkey + "&format=json";
var url = "serverFixture.json";
var albums = [];

function isLoaded () {
	for (var i = 0; i < albums.length; i++){
		var markup = $("<div class='album'><img src='" + albums[i].art + "'></div>");
		$('.albums').append(markup);
	}
}

$.getJSON( url, function(data){
	$(data.topalbums.album).each(function(){
		albums.push ({
			name:	this.name,
			artist: this.artist.name,
			played: this.playcount,
			art:	this.image[this.image.length-1]["#text"]
		});
	});
	isLoaded();
});