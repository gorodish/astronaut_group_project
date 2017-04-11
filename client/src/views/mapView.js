var MapWrapper = require('../models/mapModel');
var IssGetter = require('../models/IssGetter');



// var ISSRequestComplete = function(){
//   // debugger;
//   console.log(this);
//   if(this.status !== 200){
//     return;
//   }

//   // grab the response text
//   var jsonString = this.responseText;
//   var coords = JSON.parse(jsonString);
//   var coord = {
//     lat: coords.latitude,
//     lng: coords.longitude 
//   };

//   console.log(coords);
//   mainMap.addMarker;
// };



// var populateList = function(coord){
//   var ul = document.getElementById("coords");
//   var li = document.createElement('li');
//   li.innerText = coord.latitude;
//   li.innerText = coord.longitude;

//   ul.appendChild(li);

// };



var mapView = function(){ 

  var container = document.querySelector("#main-map");

  var iss = new IssGetter();
  
  var mainMap = null;
  iss.getPosition(function(coord){
    mainMap = new MapWrapper(container, coord, 3);
  });

  setInterval(function(){
    iss.getPosition(function(coord){
      mainMap.googleMap.setCenter(coord);

      mainMap.clearMarkers();

      mainMap.addMarker();
    });
  }, 3000);

  // var intervalID = window.setInterval(myCallback, 500);

  // function myCallback() {
  //   // Your code here
  // }

};

module.exports = mapView;