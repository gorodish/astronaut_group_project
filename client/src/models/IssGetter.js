var IssGetter = function(){

};

IssGetter.prototype = {
  getPosition: function(callback){
    var url = "https://api.wheretheiss.at/v1/satellites/25544";

    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      console.log(this.responseText);
      var jsonString = this.responseText;
      var coords = JSON.parse(jsonString);
      var coord = {
        lat: coords.latitude,
        lng: coords.longitude 
      };
      callback(coord);
    }
    request.send();
  }
}

module.exports = IssGetter;