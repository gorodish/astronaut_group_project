var Diary = function(text){
  this.timeSinceEpoch = Date.now();
  this.where = null;
  this.text = text;

  this.setWhere;
}

Diary.prototype = {
  setWhere: function(){
    var diaryScope = this;
    var issURL = 'https://api.wheretheiss.at/v1/satellites/25544';
    var xhr = new XMLHttpRequest()  ;
    xhr.open('GET', issURL);
    xhr.onload = function(){
      var usefulInfo = JSON.parse(this.responseText);
      diaryScope.where = {
        lat: usefulInfo[0].latitude,
        lng: usefulInfo[0].longitude
      }
    }
    xhr.send();
  }
}

module.exports = Diary;