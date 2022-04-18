var redirect_uri = "" //need our URI to test for authorization.

var client_id = "";
var client_secret="";

const AUTHORIZE = "https://accounts.spotify.com/authorize";

var access_token = "";
fetch('https://api.petfinder.com/v2/oauth2/token', {
  method: 'post',
  headers: {
    "content-type": "application/x-www-form-urlencoded"
  },
  body: 'grant_type=client_credentials&client_id=kvthm0Oyqunp3U0nDS5Xv91qQczAhQqUM6xg7fpKf9s97cef4B&client_secret=Ii6bRXzl7o3ZJs3kbf84OyqduNUMaC0E78YsPAdc'
}
).then(function (response) {
  return response.json()
}).then(function (data) {
  access_token = data.access_token;
  // console.log(data.access_token);
})
// function onPageLoad(){

// }


// function requestAuthorization(){
//     client_id = document.getElementById("clientId").ariaValueMax;
//     client_secret = document.getElementById("clientSecret").ariaValueMax;
//     localStorage.setItem("client_id",client_id);
//     localStorage.setItem("client_secret",client_secret);//In a real app you should not expose your client_secret to a user

//     let url=AUTHORIZE;
//     url += "?client_id=" + client_id;
//     url += "&response_type=code";
//     url += "&redirect_uri="+encodeURI(redirect_uri);
//     url += "&show_dialog=ttrue";
//     url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
//     window.location.href = url; // Show Spotify's authorization screen
// }