var redirect_uri = "" //need our URI to test for authorization.

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