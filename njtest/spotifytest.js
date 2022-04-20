var params = {
    redirect_uri: "http://localhost:58628/njtest/spotifytest2.html",
    client_id: "25822c96ad284242ac169b4553981cc0",
    client_secret: "572e8e1cc86a404d9eaccd9a9dc2ef19"
};
const AUTHORIZE = "https://accounts.spotify.com/authorize";
var access_token = "";
var access_token_creation_time = null;

var { client_id, client_secret } = params;
document.querySelector("#trigger").addEventListener("click", function () {

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
        search();
    })
});

function SearchArtists(){
    var SearchArtist= "";
    fetch('https://api.spotify.com/v1/search?type=artist&include_external=audio&q='+ SearchArtist, {
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
    })
}

// function searchalbum(){
//     var SearchAlbums= "spiral";
//     fetch('https://api.spotify.com/v1/artists/{id}/albums&include_external=audio&q='+ SearchAlbums, {
//         method: 'get',
//         headers: {
//           "content-type": "application/json",
//           'Authorization': 'Bearer ' + access_token
//         },
//       }
//     ).then(function (response) {
//         return response.json()
//     }).then(function (data) {
//         console.log(data);
//     })
// }

// function auth(){

// }
// document.querySelector("#trigger").addEventListener("click", function(){
//     console.log("triggered");
//     var params_str = Object.entries(params).map(function(entry){
//         return entry[0] + "=" + entry[1];
//     }).join("&");
//     var authorize_url = AUTHORIZE + "?" + params_str;
//     // fetch(authorize_url, {
//     //     method: 'get',
//     //     redirect: 'manual',
//     //     mode: "no-cors"
//     //   //   headers: {
//     //   //     "content-type": "application/x-www-form-urlencoded"
//     //   //   },
//     //   //   body: 'grant_type=client_credentials&client_id=25822c96ad284242ac169b4553981cc0&client_secret=572e8e1cc86a404d9eaccd9a9dc2ef19'
//     //   }
//     //   ).then(function (response) {
//     //     console.log(response);
//     //   }).catch((error) => {
//     //     console.log(error);
//     //   });
//     //   var xhr = new XMLHttpRequest();
//     //   xhr.onreadystatechange = function () {
//     //    if (xhr.readyState === XMLHttpRequest.DONE) {
//     //       console.log('XMLHttpRequest Response \n-------------');
//     //        // console.log(xhr.response);
//     //        console.log(xhr);
//     //     }
//     //    };
//     //   xhr.open('GET', authorize_url);
//     //    xhr.send();
//     window.location.href = authorize_url;
// })


// var params = {
//     redirect_uri: "http://localhost:58628/njtest/spotifytest2.html",
//     client_id: "25822c96ad284242ac169b4553981cc0",
//     client_secret: "572e8e1cc86a404d9eaccd9a9dc2ef19"
// };
// const AUTHORIZE = "https://accounts.spotify.com/authorize";
// var access_token = "";

// var { client_id, client_secret } = params;
// document.querySelector("#trigger").addEventListener("click", function () {

//     fetch('https://accounts.spotify.com/api/token', {
//         method: 'post',
//         headers: {
//           "content-type": "application/x-www-form-urlencoded",
//           'Authorization': 'Basic ' + (btoa(client_id + ':' + client_secret))
//         },
//         body: 'grant_type=client_credentials'
//       }
//     ).then(function (response) {
//         return response.json()
//     }).then(function (data) {
//         access_token = data.access_token;
//         console.log(data.access_token);
//     })
// });

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
//     url += "&show_dialog=true";
//     url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
//     window.location.href = url; // Show Spotify's authorization screen
// }


// function auth(){

// }
// document.querySelector("#trigger").addEventListener("click", function(){
//     console.log("triggered");
//     var params_str = Object.entries(params).map(function(entry){
//         return entry[0] + "=" + entry[1];
//     }).join("&");
//     var authorize_url = AUTHORIZE + "?" + params_str;
//     // fetch(authorize_url, {
//     //     method: 'get',
//     //     redirect: 'manual',
//     //     mode: "no-cors"
//     //   //   headers: {
//     //   //     "content-type": "application/x-www-form-urlencoded"
//     //   //   },
//     //   //   body: 'grant_type=client_credentials&client_id=25822c96ad284242ac169b4553981cc0&client_secret=572e8e1cc86a404d9eaccd9a9dc2ef19'
//     //   }
//     //   ).then(function (response) {
//     //     console.log(response);
//     //   }).catch((error) => {
//     //     console.log(error);
//     //   });
//     //   var xhr = new XMLHttpRequest();
//     //   xhr.onreadystatechange = function () {
//     //    if (xhr.readyState === XMLHttpRequest.DONE) {
//     //       console.log('XMLHttpRequest Response \n-------------');
//     //        // console.log(xhr.response);
//     //        console.log(xhr);
//     //     }
//     //    };
//     //   xhr.open('GET', authorize_url);
//     //    xhr.send();
//     window.location.href = authorize_url;
// })
// Shift + Enter to add a new line