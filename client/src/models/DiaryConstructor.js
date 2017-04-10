var Diary = function(text){

 this.timeSinceEpoch = Date.now();
 this.where = undefined;
 this.text = text;

};

Diary.prototype = {
  setWhere: function(callback){
    var issURL = 'http://api.open-notify.org/iss-now.json';

    var diaryScope = this;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', issURL);
    xhr.onload = function(){
      var json = JSON.parse(this.responseText);
      diaryScope.where = json.iss_position;
      callback();
    };
    xhr.send();
    // getISSposition(updateDiary);
  }
}

module.exports = Diary;