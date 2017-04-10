var diaryView = require('./views/diaryView');
var youTubeView = require('./views/youTubeView');
var mapView = require('./views/mapView');
var clockView = require('./views/clockView');
var eventsView = require('./views/eventsView');

var app = function(){

  new diaryView();
  new youTubeView();
  new mapView();
  new clockView();
  new eventsView();

}

window.onload = app;
