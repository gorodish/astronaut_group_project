var Diary = require('../models/DiaryConstructor');
var makePostRequest = function(url, payload, callback){
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('content-type', 'application/json';)
  xhr.onload = callback;
  xhr.send(JSON.stringify(payload));
}


var app = function(){
  var diarySubmit = document.querySelector('#diary-submit');
  diarySubmit.onclick = function(){
    makePostRequest('~/api/diary', )
  }
}

window.onload = app;
