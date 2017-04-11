var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
  this.marker = null;

  this.addMarker();
};

MapWrapper.prototype = {
  addMarker: function(){
    var image = {url: '../public/images/imageedit_6_4289386805.jpg', size: new google.maps.Size(47, 38)};

    this.marker = new google.maps.Marker({
      position: this.googleMap.center,
      map: this.googleMap,
      icon: image
    });
  },

  clearMarkers: function(){
    this.marker.setMap(null);
  },

  addInfoWindow: function(){
    var contentString = '<div id="content">'+
    '<p>Latitude: ' + coords.lat + '</p><p>' + 'Longitude: ' + coords.lng + '</p></div>';
    var infowindow = new google.maps.InfoWindow({
     content: contentString
   });
    marker.addListener('click', function() {
      infowindow.open(this.googleMap, marker);
    }.bind(this));
  },
};

module.exports = MapWrapper;