var Diary = function(text){
  this.timeSinceEpoch = Date.now();;
  this.text = text;

}

var getISSposition = function(callback){
  var diaryScope = this;
  var issURL = 'http://api.open-notify.org/iss-now.json';
  var xhr = new XMLHttpRequest()  ;
  xhr.open('GET', issURL);
  xhr.onload = callback;
  xhr.send();
}

var updateDiary = function(){
  var json = JSON.parse(this.responseText);
  diaryScope.where = json.iss_position;
}

Diary.prototype = {
  setWhere: function(){
    getISSposition(updateDiary);
  }
}

module.exports = Diary;