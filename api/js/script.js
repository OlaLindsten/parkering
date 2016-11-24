function initMap() {
    if (Modernizr.geolocation) {
        console.log("vi har stöd för geolocation");
        navigator.geolocation.getCurrentPosition(loadMap);
    }

}

for (var i = 0; i < 1670; i++) {
    asd(i);
}

//Returnerar kommunala gatumarksparkeringar utan avgift
var apiUtanAvgift=null;
function asd(i) {
    $.getJSON('http://data.goteborg.se/ParkingService/v1.0/PublicTimeParkings/8e4034b9-189e-463d-8643-0c19807bb7e8?&format=json', function (data) {
        apiUtanAvgift = data;
        console.log(apiUtanAvgift[i]);
        console.log(i);
        var kappa = 'img/kappa.png';
        var utanAvgiftMarker = new google.maps.Marker({
        position: {lat: apiUtanAvgift[i].Lat, lng: apiUtanAvgift[i].Long},
        map: map,
        icon: kappa
        
    });
    });
}



//data[i].Lat
//http://data.goteborg.se/ParkingService/v1.0/PublicTimeParkings/8e4034b9-189e-463d-8643-0c19807bb7e8?&format=json
//http://data.goteborg.se/ParkingService/v1.0/PublicPayMachines/8e4034b9-189e-463d-8643-0c19807bb7e8?&format=json
function loadMap(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude + ";" + longitude);
    //AIzaSyD87KDtA4OkpIs5IEVT4d_gEdAwlE-aYTw
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 10
    });
    var marker = new google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map: map

    });
}



