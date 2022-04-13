var api_key = "491b43ef93087cf91389b9e31b71d2b1"; //TODO insert your unique API KEY here
var api_url = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key;

		$.getJSON( api_url, function( data ) {

			$.each( data.results, function( i, item ) {
				$("<div class='col-md-3'><h3>" + item.title + "</h3></div>").appendTo(".popular-movies");
			});
		});