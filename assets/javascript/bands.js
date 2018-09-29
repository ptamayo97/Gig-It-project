 //displays artist's information from bandsintown API 
 function displayArtistInfo(artist,date){
   //code to grab drop selection dates and create code: for today, 7 days, and month then displays events;
   //if today is selected then date variable will change to today or upcoming
   //if 7 days is selected then date varialbe will equal to dange range of 7 days
   //if this month is selected then date varialbe will equal to current month
   //link drop selection to date variable
   //convert date variable to api parameters
   //link val in search form to artist variable
   var artist
   var date
    var queryURL = "https://rest.bandsintown.com/artists/"+artist+"/events?app_id=3c23ec0eb335a5c10b8f6691c2121940&date="+date;
    $.ajax({
     url: queryURL,
     method: "GET"
   }).then(function(response) {
 //ajax to assess object value to display on map Venue location(latitude and physical address),
 for(i = 0; i < response.length; i++){
  //console log venue, city, lat and long) 
  console.log("Venue: "+response[i].venue.name);
  console.log("City: "+response[i].venue.city);
  console.log("Latitude: "+response[i].venue.latitude);
  console.log("Longitude: "+response[i].venue.longitude);
  var dateEvent = response[i].datetime;
  console.log(dateEvent);
  var prettyDateEvent = moment(dateEvent).format("MM/DD/YY @ hh:mm a");
  //console log date and time of the vent
  console.log(prettyDateEvent);
  //ajax to assess: top 5 tracks, photos(members, events, album art, anything else you might think would be cool) dates 
  var artistInfo = response[i].url;
  console.log(artistInfo);
  console.log("--------------------------------------");

 }
   })
  
  }
  //call back function to display JSON for artist and events
  displayArtistInfo("maroon5","upcoming");