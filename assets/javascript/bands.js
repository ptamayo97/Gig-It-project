//call back function to display JSON for artist and events
function displayArtistEvents(artist, date) {
  //bands in town API
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=3c23ec0eb335a5c10b8f6691c2121940&date=" + date;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    //displays artist page from bandinstown
    var artistInfo = response[0].url;
    var a = $("<a>").text("Artist's Website");
    var aOne = a.attr("href", artistInfo);
    $(".artistPage").append(aOne);//need to create div class "artistPage" in html for where artist page will display
    //ajax to assess object value to display on map Venue location(latitude and physical address),
    for (i = 0; i < response.length; i++) {
      //console log venue, city, lat and long)
      var venue = response[i].venue.name;
      var city = response[i].venue.city;
      var latitude = response[i].venue.latitude;
      var longitude = response[i].venue.longitude;
      var dateEvent = response[i].datetime;
      var prettyDateEvent = moment(dateEvent).format("MM/DD/YY @ hh:mm a");
      var artist = $("<div>");
      var v = $("<p>").text(venue);
      artist.append(v);
      var c = $("<p>").text("City: " + city);
      artist.append(c);
      var d = $("<p>").text("Date: " + prettyDateEvent);
      artist.append(d);
      $(".artistInfo").append(artist);
      console.log("Venue: " + venue);
      console.log("Latitude: " + latitude);
      console.log("Longitude: " + longitude);
      console.log("--------------------------------------");
    }
  })
};

function displayArtistInfo(artist) {
  //bands in town API
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=3c23ec0eb335a5c10b8f6691c2121940";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var banDiv = $("<div>");
    var bandName = response.name;
    banDiv.append(bandName);
    //append facebook page to html
    var banFb = response.facebook_page_url;
    var banDiv2 = $("<div>");
    var aOne = $("<a>").text("Artist's Facebook Page").attr("href", banFb);
    banDiv2.append(aOne);
    //append image to html
    var bImage = $("<img>").attr("src",response.image_url);
    //append bandsintown page to html
    var banBit = response.url;
    var banDiv3 = $("<div>");
    var aOne = $("<a>").text("Artist's BandsInTown Page").attr("href", banBit);
    banDiv3.append(aOne);
    var bImage2 = $("<img>").attr("src",response.thumb_url);
    //append number of upcoming events

    $(".artistName").append(banDiv, bImage2, banDiv2, banDiv3);

  })
  }    
//code to grab drop selection dates and create code: for today, 7 days, and month then displays events;
//need to create submit button in html
$("#submit").on("click", function () {
  $(".artistName").empty();
  $(".artistPage").empty();
  $(".artistInfo").empty();
  //add jquery for return button
  artist = $("#search").val().toLowerCase();
    //displayArtistInfo(artist);
  //if 7 days is selected then date varialbe will equal to dange range of 7 days
  if ($("#timeFrame").val() === "thisWeek") {
    date //convert date variable to api parameters
    displayArtistEvents(artist, date)
    //if this month is selected then date varialbe will equal to current month
  } else if ($("#timeFrame").val() === "thisMonth") {
    date  //link drop selection to date variable
    displayArtistEvents(artist, date)
  } else if ($("#timeFrame").val()==="today"){
    date = "upcoming" //if today is selected then date variable will change to today or upcoming
    displayArtistEvents(artist, date)
  } else{
    displayArtistInfo(artist);
  }
  ;
  $("#search").val("");
 
});
