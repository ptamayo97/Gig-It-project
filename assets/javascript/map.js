function initMap() {

    let options = {
        zoom: 8,
        center:{lat: 32.715736 ,lng:-117.161087}
    }
 
 
 let map = new
 google.maps.Map(document.getElementById('map'), options);

//  let venueName = "";
//  let eventDetails = "";

//  info window detail to populate will need ajax call to store info in above variables
    // var contentString = '<div id="content">' +
    //     '<div id="siteNotice">' +
    //     '</div>' +
    //     '<h1 id="firstHeading" class="firstHeading">'+ venueName +'</h1>' +
    //     '<div id="bodyContent">' +
    //     '<p><b>'+ venueName +'</b>, '+ eventDetails +'</p>' +
    //     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    //     'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    //     '(last visited June 22, 2009).</p>' +
    //     '</div>' +
    //     '</div>';

 let marks = [{
     coords: {
         lat:32.749010 ,
         lng:-117.128560
     },
     content: "<h1> Queen Bee's Venues</h2>"
 }];
 
 for(let i = 0; i < marks.length; i++){
     addMarker(marks[i]);
 }
 
 //  Function for creating a marker
 
 function addMarker(prop){
 
    let marker = new google.maps.Marker(
        {
            position: prop.coords,
            map: map,
            title: 'Queens Bees'
        });
         let infowindow = new google.maps.InfoWindow({
        content: prop.content
        
        
      });

        marker.addListener('click',function(){
            infowindow.open(map,marker);
        });
         // marker.addClass("marks");
 
 // Make sure their is customization for  icons
 
//          if(prop.iconImage){
 
//  // set the icon if the is one established
 
//          prop.setIcon(mark.iconImage);
//          }
         
//  // Check for content information
 
//          if(prop.content){
 
//  //  Populate information as a pop up
 
//          let infoWindow = new google.maps.InfoWindow({
//                  content: prop.content
 
  // When Icon is clicked on it will display the pop up infoWindow to the user with local artist information
 
 
    //      }
     }
 
 }