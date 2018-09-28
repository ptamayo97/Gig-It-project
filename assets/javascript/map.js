function initMap() {

    let venue = {lat:32.7157 , lng:-117.1628};

    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: venue});

    let marker = new google.maps.Marker({position: venue, map:map});
    
}