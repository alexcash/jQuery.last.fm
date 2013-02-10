(function( $ ) {
	$.fn.lfm = function(options){
		var settings = $.extend({
			APIkey:		null,			// [string] required in order to retrieve content from last.fm
			User:			null,			// [string] required username to retrieve data for
			Behavior:	"hover"		// controls detail content behavior. can be changed to 'click'
		}, options);

		var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=" + settings.User + "&period=3month&api_key=" + settings.APIkey + "&format=json";
		//var url = "serverFixture.json"; //turn this on to try wihtout an api key or user
		var albums = [];

		function isLoaded (albumElement) {

			for (var i = 0; i < albums.length; i++){
				var markup = $("<div class='album'><div class='front'><img src='" + albums[i].art + "'><div class='alpha'></div></div><div class='back'><h2>" + albums[i].artist + "</h2><h1>" + albums[i].name + "</h1><h3>" + albums[i].played + " tracks played</h3></div></div>");
				albumElement.append(markup);
			}

			if (settings.Behavior == "hover") {
				albumElement.find('.album').hover(function(){
					$(this).addClass('flip');
				},function(){
					$(this).removeClass('flip');
				});
			} else {
				$(document).bind('click', function (e) {
					$('.flip').removeClass('flip');
				});

				albumElement.find('.album').click(function(e){
					e.stopPropagation();
					if($('.flip')[0] === this){
						$(this).removeClass('flip');
					} else {
						$('.flip').removeClass('flip');
						$(this).addClass('flip');
					}
				});
			}
		}

		return this.each(function(){
			var $this = $(this);
			$.getJSON( url, function(data){
				$(data.topalbums.album).each(function(){
					albums.push ({
						name:	this.name,
						artist: this.artist.name,
						played: this.playcount,
						art:	this.image[this.image.length-1]["#text"]
					});
				});
				isLoaded($this);
			});
		});
	};
})( jQuery );