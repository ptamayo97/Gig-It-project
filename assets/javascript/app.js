
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA5acI7HtRSJyoYt1tNK7aSoHQOJFGaK4M",
    authDomain: "gig-it-fafd1.firebaseapp.com",
    databaseURL: "https://gig-it-fafd1.firebaseio.com",
    projectId: "gig-it-fafd1",
    storageBucket: "gig-it-fafd1.appspot.com",
    messagingSenderId: "660146414559"
  };
  firebase.initializeApp(config);
 
 //displays artist's information from bandsintown API 
 function displayArtistInfo(){
   var artist = "maroon5";
   var date = "upcoming";
   var queryURL = "https://rest.bandsintown.com/artists/"+artist+"/events?app_id=3c23ec0eb335a5c10b8f6691c2121940&date="+date;
   $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  console.log(response);
  
  })
 }
 //call back function to display JSON for artist and events
 displayArtistInfo()

