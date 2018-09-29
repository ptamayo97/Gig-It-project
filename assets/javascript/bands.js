 //displays artist's information from bandsintown API 
 function displayArtistInfo(){
    var artist 
    var date 
    var queryURL = "https://rest.bandsintown.com/artists/"+artist+"/events?app_id=3c23ec0eb335a5c10b8f6691c2121940&date="+date;
    $.ajax({
     url: queryURL,
     method: "GET"
   }).then(function(response) {
   //console.log(response);
   })
   //grab drop dates and create code
  }
  //call back function to display JSON for artist and events
  displayArtistInfo()
 