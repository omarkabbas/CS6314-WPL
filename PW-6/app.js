var place = null;

var map;
var service;
var infowindow;
var geocoder;
function initMap() {
  geocoder = new google.maps.Geocoder();

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(32.984202, -96.748633),
    zoom: 15
  });
  document.getElementById("submit").addEventListener("click", function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById("address").value;
  geocoder.geocode({ address: address }, function(results, status) {
    if (status === "OK") {
      resultsMap.setCenter(results[0].geometry.location);
      console.log(results[0].geometry.location);
      place = results;
      var request = {
        location: results[0].geometry.location,
        radius: "1500",
        type: ["restaurant"]
      };

      service = new google.maps.places.PlacesService(map);

      service.nearbySearch(request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, "click", function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}