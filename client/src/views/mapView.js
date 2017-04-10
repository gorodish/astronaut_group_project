var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMarker: function(coords){
    var image = {url: '../public/images/imageedit_6_4289386805.jpg', size: new google.maps.Size(47, 38)};
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      icon: image
    });

    var contentString = '<div id="content">'+
        '<p>Latitude: ' + coords.lat + '</p><p>' + 'Longitude: ' + coords.lng + '</p></div>';
    var infowindow = new google.maps.InfoWindow({
       content: contentString
     });
    marker.addListener('click', function() {
      infowindow.open(this.googleMap, marker);
    }.bind(this));
  }
};

var makeISSRequest = function(url, callback){
  //create a new HMLHTTPrequest object
  var request = new XMLHttpRequest();

  //set type of request, and the url
  request.open("GET", url);

  //set the callback that we want to use when the request is comlete
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
  var center = {lat: Number(coord.latitude), lng: Number(coord.longitude)};
  var container = document.querySelector("#main-map");
  var zoom = 3;
  var mainMap = new MapWrapper(container, center, zoom);
  mainMap.addMarker(center);

};


var populateList = function(coord){
  var ul = document.getElementById("coords");
  var li = document.createElement('li');
  li.innerText = coord.latitude;
  li.innerText = coord.longitude;

  ul.appendChild(li);

};



var mapView = function(){ 

  var url = "http://api.open-notify.org/iss-now.json";
  makeISSRequest(url, ISSRequestComplete);

  // setInterval(makeISSRequest(url, ISSRequestComplete), 1000);
  
};

module.exports = mapView;