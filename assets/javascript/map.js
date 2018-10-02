function initMap() {

    let options = {
        zoom: 8,
        center:{lat: 32.715736 ,lng:-117.161087},
        styles:[
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#523735"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#c9b2a6"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f24862"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#dcd2be"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#ae9e90"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#45f1f5"
                },
                {
                  "visibility": "on"
                },
                {
                  "weight": 8
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#93817c"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "elementType": "labels.text",
              "stylers": [
                {
                  "color": "#dcd2be"
                },
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#a5b076"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#447530"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#6875cc"
                },
                {
                  "weight": 1
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#84a4b0"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#49fe14"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#393337"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#65d6dc"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#e95047"
                }
              ]
            },
            {
              "featureType": "road.local",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#806b63"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8f7d77"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#b9d3c2"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#92998d"
                }
              ]
            }
          ]

    };
 
 
 let map = new
 google.maps.Map(document.getElementById('map'), options);

 let venueName = "Queen's Bee";
//  let eventDetails = "";
//  let artistInfo = "";
//  let artistPhotos = "";
//  let address = "";

//  info window detail to populate will need ajax call to store info in above variables

    // var contentString = '<div id="content">' +
    //     '<div id="address">' + address +
    //     '</div>' +
    //     '<h1 id="firstHeading" class="firstHeading">'+ venueName +'</h1>' +
    //     '<div id="bodyContent">' +
    //     '<p><b>'+ venueName +'</b>, '+ eventDetails +'</p>' +
    //     '<p>'+ artistInfo +'</p>' +
    //     '<img>'+ artistPhotos +'</img>'
    //     '</div>' +
    //     '</div>';

 let marks = [{
     coords: {
         lat:32.749010 ,
         lng:-117.128560
     },
     content: "<h1> Queen Bee's Venues</h2>"
    //  iconImage: function category() {

    //     let category = "";

    //      if(category = House ){
    //      this.iconImage = "house icon"}

    //      if(category = coffee){
    //          this.iconImage = "coffee shop icon"
    //      }
    //      if(category = theater){
    //         this.iconImage = "theater icon"
    //     }
    //     if(category = amptheater){
    //         this.iconImage = "amptheater icon"
    //     }
    //     if(category = bar){
    //         this.iconImage = "drink shop icon"
    //     }
    //     if(category = other){
    //         this.iconImage = "common icon"
    //     }
    //  },
 }];
 
 for(let i = 0; i < marks.length; i++){
     addMarker(marks[i]);
 }
 
 //  Function for creating a marker
 
 function addMarker(prop){
 
    let marker = new google.maps.Marker(
        {
            position: prop.coords,
            icon: prop.iconImage,
            map: map,
            title: venueName
        });
         let infowindow = new google.maps.InfoWindow({
        content: prop.content
        
        
      });

        marker.addListener('click',function(){
            infowindow.open(map,marker);
        });

 
//  Make sure their is customization for  icons
 
//          if(prop.iconImage){
 
//  // set the icon if the is one established
 
//          prop.setIcon(mark.iconImage);
//          }
         
//  // Check for content information
 
//          if(prop.content){
 
//  //  Populate information as a pop up
 
//          let infoWindow = new google.maps.InfoWindow({
//                  content: prop.content
 
// //   When Icon is clicked on it will display the pop up infoWindow to the user with local artist information
 
 
//         //  }
//     })
// }
 }
}

