var api_key = "491b43ef93087cf91389b9e31b71d2b1"; //my api key
var api_url = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key; // popular movies API
var api_url_tv = "https://api.themoviedb.org/3/tv/popular?api_key=" + api_key; // popular tv shows API

    // call API and append data to div on index using ".popular-movies" class
		$.getJSON( api_url, function( data ) {

			$.each( data.results, function( i, item ) {
				$("<div class='col-md-3'><h3>" + item.title + "</h3></div>").appendTo(".popular-movies");
			});
		});
    // call API and append data to div on index using ".popular-shows" class
    $.getJSON( api_url_tv, function( data ) {

			$.each( data.results, function( i, item ) {
				$("<div class='col-md-3'><h3>" + item.name + "</h3></div>").appendTo(".popular-shows");
			});
		});