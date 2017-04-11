var Diary = function(text){

 this.timeSinceEpoch = Date.now();
 this.where = undefined;
 this.text = text;

};

Diary.prototype = {
  setWhere: function(callback){
    var issURL = 'https://api.wheretheiss.at/v1/satellites/25544';

    var diaryScope = this;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', issURL);
    xhr.onload = function(){
      var json = JSON.parse(this.responseText);
      diaryScope.where = {
        lat: json.latitude,
        lng: json.longitude
      };

      callback();
    };
    xhr.send();
    // getISSposition(updateDiary);
  },




}

module.exports = Diary;