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

		//spotify api
 var redirect_uri = "https://hkhalfan1979.github.io/entertainment-hub/" //need our URI to test for authorization.

 var client_id = "";
 var client_secret="";
 
 const AUTHORIZE = "https://accounts.spotify.com/authorize";
 
 function onPageLoad(){
 
 }
 
 function requestAuthorization(){
	 client_id = document.getElementById("clientId").ariaValueMax;
	 client_secret = document.getElementById("clientSecret").ariaValueMax;
	 localStorage.setItem("client_id",client_id);
	 localStorage.setItem("client_secret",client_secret);//In a real app you should not expose your client_secret to a user
 
	 let url=AUTHORIZE;
	 url += "?client_id=" + client_id;
	 url += "&response_type=code";
	 url += "&redirect_uri="+encodeURI(redirect_uri);
	 url += "&show_dialog=ttrue";
	 url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
	 window.location.href = url; // Show Spotify's authorization screen
 }
 
 //event listener for when search button is clicked.
  document.getElementById("myBtn").addEventListener("click", displayDate);
 
  function popularmusic(){
 
  }
 
  function searchmovie(){
 //When button is clicked return searched movie.
  }
 
  function returnmusic(){
 //When button is clicked return seached music. Same search query for both movie and music.
  }
 
  function finalresults(){
 //take our searched elements and dump them into html tag (ID tag)
 
  }
 