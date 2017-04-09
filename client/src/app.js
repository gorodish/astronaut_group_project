var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.DROP
    });

    var contentString = '<div id="content">'+
        '<p>Latitude: ' + coords.lat + '</p><p>' + 'Longitude: ' + coords.lng + '</p></div>';
    var infowindow = new google.maps.InfoWindow({
       content: contentString
     });
    marker.addListener('click', function() {
      infowindow.open(this.googleMap, marker);
    }.bind(this));
  },
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
    var lat = ("Latitude: ", event.latLng.lat());
    var lng = ("Longitude: ", event.latLng.lng());
    this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});
    }.bind(this));
  }
};

var makeISSRequest = function(url, callback){
  //create a new HMLHTTPrequest object
  var request = new XMLHttpRequest();

  //set type of request, and the url
  request.open("GET", url);

  //set the callback th`t we want to use when the request is comlete
  request.onload = callback;

//write an onerror function too

  //send the request
  request.send();
};

var ISSRequestComplete = function(){
  if(this.status !== 200){
    return;
  }

  // grab the response text
  var jsonString = this.responseText;
  var coords = JSON.parse(jsonString);
  var coord = coords.iss_position;
  populateList(coord);
};

var populateList = function(coord){
  var ul = document.getElementById("coords");
  var li = document.createElement('li');
  li.innerText = coord.latitude;
  li.innerText = coord.longitude;

  ul.appendChild(li);

};


var app = function(){ 
  var container = document.getElementById("main-map");
  var center = {lat: 51.5074, lng: 0.1278};
  var zoom = 10;
  var mainMap = new MapWrapper(container, center, zoom);
  mainMap.addMarker(center);
  mainMap.addClickEvent();

  var url = "http://api.open-notify.org/iss-now.json";
  makeISSRequest(url, ISSRequestComplete);
  
};

window.onload = app;
