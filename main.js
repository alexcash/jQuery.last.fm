Array.prototype.last = function() {return this[this.length-1];};

var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=alex-cash&period=3month&api_key=" + APIkey + "&format=json";
$.getJSON( url, function(data){
	$(data.topalbums.album).each(function(){
		var cur = {
			name: 	this.name,
			artist: this.artist.name,
			played: this.playcount,
			art: 	this.image[this.image.length-1]["#text"]
		}
		console.log(cur);
	});
});
