var Diary = require('./models/DiaryConstructor');

var makePostRequest = function(url, payload, callback){
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = callback;
  xhr.send(JSON.stringify(payload));
}


var app = function(){
  var diarySubmit = document.querySelector('#diary-submit');
  var diaryInput = document.querySelector('#diary-input');
  diarySubmit.onclick = function(){
    var entry = new Diary(diaryInput.value);
    makePostRequest('/api/diary', entry, function(){
      console.log(JSON.parse(this.responseText));
    })
  }
}

window.onload = app;
