//search by artist
// function Venue_Object(lat, lng, street, displayName, zip, phone, capacity, date) {
//     return {
//         lat: lat,
//         lng: lng,
//         street: street,
//         displayName: displayName,
//         zip: zip,
//         phone: phone,
//         capacity: capacity,
//         date: date,
//     }
// }


var venue_object_array = [];

var artist_id;
var venue_name;

function search_by_artist(artist_name) {

    var queryURL = "https://api.songkick.com/api/3.0/search/artists.json?apikey=4s4kGBz0WjJ4Yk6O&query=" + artist_name;

    var temp_id = "";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //console.log(response);

        //console.log(response.resultsPage.results);
        //console.log("artist id: "+response.resultsPage.results.artist[0].id);

        artist_id = response.resultsPage.results.artist[0].id;
        //search_similar_artist(artist_id);

        //up_coming_event(artist_id);
        temp_id = artist_id;
        //console.log("inside .ajax "+temp_id);

    })
        .then(function () {
            console.log("promise", artist_id)
        });


};

//search by artist and data range  e.g. data format: min_date=2009-10-01 & max_date:2009-10-30

function search_by_artist_datarange(artist_name, min_date, max_date) {
    var artist_name;
    var min_date;
    var max_date;

    var queryQuery = "https://api.songkick.com/api/3.0/events.json?apikey=4s4kGBz0WjJ4Yk6O&artist_name=" + artist_name + "&min_date=" + min_date + "+&max_date=" + max_date;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //console.log(response);

    });


}
// search by similar artist
//"https://api.songkick.com/api/3.0/artists/{artist_id}/similar_artists.json?apikey=4s4kGBz0WjJ4Yk6O"
function search_similar_artist(artist_id) {
    var queryURL = "https://api.songkick.com/api/3.0/artists/" + artist_id + "/similar_artists.json?apikey=4s4kGBz0WjJ4Yk6O";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //console.log(response);

    });

};

//search by venue
function search_by_venue(venue_name) {
    //var venue_name;
    var venue_length;
    console.log("inside the search by venue============>>>>>>");
    // var queryURL="http://eventful.com/events?q=music&l=92103&within=10&units=miles"

    //var queryURL="http://eventful.com/events?q=music&l=San+Diego";
    var queryURL = "https://api.songkick.com/api/3.0/search/venues.json?query=" + venue_name + "&apikey=4s4kGBz0WjJ4Yk6O";

    // var queryURL = "http://api.musicgraph.com/api/v2/album/suggest?api_key=c8303e90962e3a5ebd5a1f260a69b138&prefix=hot&genre=rock&limit=3";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("venue length  " + response.resultsPage.results.venue.length);
        var venues = response.resultsPage.results.venue;

        if (venues.length >= 15) venues = venues.slice(0, 15)

        // console.log("venue   "+JSON.stringify(response.resultsPage.results.venue));
        console.log("venue");
        console.log(response.resultsPage.results.venue);
        for (var i = 0; i < venues.length; i++) {
            console.log("inside the ajax============>>>>>>");
            console.log("venue  ", venues[i]);
            console.log("latitude  ", venues[i].lat);
            console.log("longitude  ", venues[i].lng);
            console.log("Street  ", venues[i].street);
            console.log("display  Name", venues[i].displayName);
            console.log("zip code ", venues[i].zip);
            console.log("phone  ", venues[i].phone);
            console.log("capacity   ", venues[i].capacity);
            console.log("response length    ", venues.length);

            venue_object_array.push({
                lat: venues[i].lat || "",
                lng: venues[i].lng || "",
                street: venues[i].street || "",
                displayName: venues[i].displayName || "",
                zip: venues[i].zip || "",
                phone: venues[i].phone || "",
                capacity: venues[i].capacity || 0,
                date: venues[i].date || ""
            })

            // venue.lat = venues[i];
            // venue.lng = venues[i].lng;
            // venue.street = venues[i].street;
            // venue.displayName = venues[i].displayName;
            // venue.zip = venues[i].zip
            // venue.phone = venues[i].phone;
            // venue.capacity = venues[i].capacity;
            // var venue = new venue_object();
            // venue_object_array.push(venue);

            //latitude 
            //longitude
            //street
            //displayname
        }
    });

};

//search by event
//"https://api.songkick.com/api/3.0/events/{event_id}.json?apikey=4s4kGBz0WjJ4Yk6O"
function displayVenueInfo(venue_id) {
    var venue_id;
    var queryURL = "https://api.songkick.com/api/3.0/venues/" + venue_id + ".json?apikey=4s4kGBz0WjJ4Yk6O";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //console.log(response);

    });

};

//search by location (lat, long)
function search_by_lat_long(latitude, longitude) {
    var latitude;
    var longitude;

    var queryURL = "https://api.songkick.com/api/3.0/search/locations.json?location=geo:" + latitude + "," + longitude + "&apikey=4s4kGBz0WjJ4Yk6O";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //console.log(response);

    });

};



function search_by_metroArea(metroName) {

    var queryURL = "https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey=4s4kGBz0WjJ4Yk6O";
}


function up_coming_event(artist_id) {

    var queryURL = "https://api.songkick.com/api/3.0/artists/" + artist_id + "/calendar.json?apikey=4s4kGBz0WjJ4Yk6O";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //console.log(response);


    });

}

//$(document).ready(function(){
var band_name = "Mariah Carey";
artist_id = search_by_artist(band_name);

console.log(" in the main  artist id  " + artist_id);

//});


var venue_name = "London";
search_by_venue(venue_name);

