var Diary = require('./models/DiaryConstructor');

var makePostRequest = function(url, payload, callback){
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = callback;
  xhr.send(JSON.stringify(payload));
}

var getAllEntries = function(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = callback;
  xhr.send();
}

var getLastXEntries = function(){
  var all = JSON.parse(this.responseText);
  var last = all.length - 1
  last4 = all.slice(last - 3, last + 1).reverse();

  renderEntries(last4);
}

var renderEntries = function(array){
  var recent = document.querySelector('#recent-entries');
  recent.innerText = "";

  array.forEach(function(entry){
    var text = document.createElement('li');
    text.innerText = entry.text;
    var date = document.createElement('li');
    date.innerText = new Date(entry.timeSinceEpoch);
    var where = document.createElement('li');
    where.innerText = 'far away';
    recent.appendChild(text);
    recent.appendChild(date);
    recent.appendChild(where);
  });
}

var updateRecent = function(){
  getAllEntries('/api/diary', getLastXEntries);
  
}


var app = function(){
  var diarySubmit = document.querySelector('#diary-submit');
  var diaryInput = document.querySelector('#diary-input');

  var seeAll = document.querySelector('#see-all-entries');
  
  diarySubmit.onclick = function(){
    var entry = new Diary(diaryInput.value);
    makePostRequest('/api/diary', entry, function(){
      console.log(JSON.parse(this.responseText));
    })
    updateRecent()
  }

  seeAll
updateRecent();

}

window.onload = app;
