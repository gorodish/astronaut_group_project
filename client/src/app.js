var diaryView = require('./views/diaryView');
var youTubeView = require('./views/youTubeView');
var mapView = require('./views/mapView');

var app = function(){
  new diaryView();
  new youTubeView();
  new mapView();
}

window.onload = app;
