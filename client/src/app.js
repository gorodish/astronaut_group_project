var diaryView = require('./views/diaryView');
var youTubeView = require('./views/youTubeView');

var app = function(){
  new diaryView();
  new youTubeView();

}

window.onload = app;
