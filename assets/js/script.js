// Stated variables, keys and urls.
var api_key = "491b43ef93087cf91389b9e31b71d2b1"; //my api key
var api_url = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key; // popular movies API
var api_url_tv = "https://api.themoviedb.org/3/tv/popular?api_key=" + api_key; // popular tv shows API

var APIMusic_key ="ySHodLFbACXmhECkEOXxTuSVePemPzwezFSvTTsx"// Leelai's api key
var music_url= "https://api.discogs.com/artists/22854?token=" + APIMusic_key; //Discogs music data



    // call API and append data to div on index using ".popular-movies" class
		$.getJSON( api_url, function( data ) {

			$.each( data.results, function( i, item ) {
				var posterFullUrl = "https://image.tmdb.org/t/p/w185/" + item.poster_path;
				$("<div class='col-md-3'><img src="+posterFullUrl+"><h3>" + item.title + "</h3><p>"+ item.release_date +"</p></div>").appendTo(".popular-movies");
			});
		});
    // call API and append data to div on index using ".popular-shows" class
    $.getJSON( api_url_tv, function( data ) {

			$.each( data.results, function( i, item ) {
				var posterFullUrl = "https://image.tmdb.org/t/p/w185/" + item.poster_path;
				$("<div class='col-md-3'><img src="+posterFullUrl+"><h3>" + item.name + "</h3></div>").appendTo(".popular-shows");
			});
		});

// script to return search results when button is clicked

// once a search is performed go to console

// you will see the search results in array-object

// to do: append searched movie to html ID

		$(document).ready(function() {
			var url = 'https://api.themoviedb.org/3/',
			mode = 'search/movie',
			input,
			movieName,
			key = '?api_key=491b43ef93087cf91389b9e31b71d2b1';
		 
			$('button').click(function() {
			    var input = $('#movie-search').val(),
				   movieName = encodeURI(input);
			    $.ajax({
				   url: url + mode + key + '&query='+movieName ,
				   dataType: 'jsonp',
				   success: function(data) {
				    console.log(data);
					$.each( data.results, function( i, item ) {
						var posterFullUrl = "https://image.tmdb.org/t/p/w185//" + item.poster_path;
						$("<div class='col-3 mb-1'><img src="+posterFullUrl+"><h3>" + item.title + "</h3></div>").appendTo(".search-movie");
					});
				    
				   },
				   error: function (request, status, error) {
				    alert(status + ", " + error);
				   }
			    });
			});
		 });

 //discogs
 $.getJSON( api_url, function( data ) {

	$.each( data.results, function( i, item ) {
		var posterFullUrl = "https://image.tmdb.org/t/p/w185/" + item.poster_path;
		$("<div class='col-md-3'><img src="+posterFullUrl+"><h3>" + item.title + "</h3><p>"+ item.release_date +"</p></div>").appendTo(".popular-movies");
	});
});

 //event listener for when search button is clicked.
  document.getElementById("myBtn").addEventListener("click", displayDate);
 
  