// Stated variables, keys and urls.
var api_key = "491b43ef93087cf91389b9e31b71d2b1"; //my api key
var api_url = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key; // popular movies API
var api_url_tv = "https://api.themoviedb.org/3/tv/popular?api_key=" + api_key; // popular tv shows API


var params = {
	redirect_uri: "http://localhost:58628/njtest/spotifytest2.html",
	client_id: "25822c96ad284242ac169b4553981cc0",
	client_secret: "572e8e1cc86a404d9eaccd9a9dc2ef19"
};
const AUTHORIZE = "https://accounts.spotify.com/authorize";
var access_token = "";
var access_token_creation_time = null;

var { client_id, client_secret } = params;



var APIMusic_key = "ySHodLFbACXmhECkEOXxTuSVePemPzwezFSvTTsx"// Leelai's api key
var music_url = "https://api.discogs.com/artists/22854?token=" + APIMusic_key; //Discogs music data


// call API and append data to div on index using ".popular-movies" class
$.getJSON(api_url, function (data) {

	$.each(data.results, function (i, item) {
		var posterFullUrl = "https://image.tmdb.org/t/p/w185/" + item.poster_path;

		$("<div class='max-w-sm rounded overflow-hidden shadow-lg single-movie-item'><img class='w-full' src=" + posterFullUrl + "><h3 class='text-blue-900 text-xl font-medium mb-2 p-2'>" + item.title + "</h3><p class='p-2 text-red-700'>" + item.release_date + "</p></div>").appendTo(".popular-movies");

	});
});
// call API and append data to div on index using ".popular-shows" class
$.getJSON(api_url_tv, function (data) {

	$.each(data.results, function (i, item) {
		var posterFullUrl = "https://image.tmdb.org/t/p/w185/" + item.poster_path;
		$("<div class='max-w-sm rounded overflow-hidden shadow-lg single-movie-item'><img class='w-full' src=" + posterFullUrl + "><h3  class='p-2'>" + item.name + "</h3></div>").appendTo(".popular-shows");
	});
});

// script to return search results when button is clicked

// once a search is performed go to console

// you will see the search results in array-object

// to do: append searched movie to html ID

$(document).on("click","#search-btn",search)
function search() {
	var url = 'https://api.themoviedb.org/3/',
		mode = 'search/movie',
		input,
		movieName,
		key = '?api_key=491b43ef93087cf91389b9e31b71d2b1';

	var input = $('#movie-search').val(),
		movieName = encodeURI(input);
	$.ajax({
		url: url + mode + key + '&query=' + movieName,
		dataType: 'jsonp',
		success: function (data) {
			console.log(data);
			$(".search-movie").empty();
			$.each(data.results, function (i, item) {
				var posterFullUrl = "https://image.tmdb.org/t/p/w185//" + item.poster_path;
				var movieDiv = $("<div class='max-w-sm rounded overflow-hidden shadow-lg single-movie-item'><img class='w-full' src=" + posterFullUrl + "><h3 class='p-2'>" + item.title + "</h3><p class='p-2'>" + item.release_date + "</p></div>");
				movieDiv.appendTo(".search-movie");
				var artist = item.title;
				movieDiv.on("click", function(){
					gettoken(function(){
						SearchAlbums(artist);
					});
				})
			});

		},
		error: function (request, status, error) {
			alert(status + ", " + error);
		}
	});
};
//display data from modal
function SearchAlbums(artist) {

	fetch('https://api.spotify.com/v1/search?type=album&include_external=audio&q=' + artist, {
		method: 'get',
		headers: {
			"content-type": "application/json",
			'Authorization': 'Bearer ' + access_token
		},
	}
	).then(function (response) {
		return response.json()
	}).then(function (data) {
		console.log(data);
			var infolinedup = $('#music-info').val().split('\n');
			const albumtracks= "Number of Tracks: " + data.albums.items[0].total_tracks;
			const albumdate = "Track release date: " + data.albums.items[0].release_date
			const albumName = "Album Name: " + data.albums.items[0].name
			const albumDiv = document.getElementById("Album Name");	
				$("#Popup_Modal").show(); 
				$("#music-info").text(albumName);
				$("#music-tracks").text(albumtracks);
				$("#music-date").text(albumdate);
				$("#seemore-btn").attr("data-href","https://www.youtube.com/results?search_query="+albumName.split(" ").join("+"));
		return infolinedup.forEach(item => console.log(item));
	})
}

function gettoken(callback) {
	// get token to look at time get token before refreshing 
	// save current time after getting it.
	// need a conditional that will only get token if time has elapsed (30 mins example)
	// either case it must run search artist
	fetch('https://accounts.spotify.com/api/token', {
		method: 'post',
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			'Authorization': 'Basic ' + (btoa(client_id + ':' + client_secret))
		},
		body: 'grant_type=client_credentials'
	}
	).then(function (response) {
		return response.json()
	}).then(function (data) {
		access_token = data.access_token;
		console.log(data.access_token);
		callback();
	})
};
//modal
$(document).on("click", "#cancel-btn",function () { 
    $("#Popup_Modal").css("display", "none");
});
$(document).on("click", "#seemore-btn",function (event) { 
    window.location.href= event.target.dataset.href;
});
