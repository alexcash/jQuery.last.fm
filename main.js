//var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=" + user + "&period=3month&api_key=" + APIkey + "&format=json";
var url = "serverFixture.json";
var albums = [];

function isLoaded () {
	for (var i = 0; i < albums.length; i++){
		var markup = $("<div class='album'><div class='front'><img src='" + albums[i].art + "'><div class='alpha'></div></div><div class='back'><h2>" + albums[i].artist + "</h2><h1>" + albums[i].name + "</h1><h3>" + albums[i].played + " tracks played</h3></div></div>");
		$('.albums').append(markup);
	}
	$('.album').hover(function(){
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});
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