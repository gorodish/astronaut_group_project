var Diary = require('../models/DiaryConstructor');

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

  populateRecent(last4);
}


var renderList = function(array, element){
  array.forEach(function(entry){
   var text = document.createElement('li');
   var diaryText = entry.text;
   diaryText.length > 140 ? diaryText = diaryText.substring(0,139)+"..." : null;
   text.innerText = diaryText;
   element.appendChild(text);

   var childList = document.createElement('ul');
   text.appendChild(childList);

   var date = document.createElement('li');
   date.innerText = new Date(entry.timeSinceEpoch);
   childList.appendChild(date);

   var where = document.createElement('li');
   where.innerText = entry.where.latitude + entry.where.longitude;
   childList.appendChild(where);
 })
}

var populateRecent = function(array){
  var recent = document.querySelector('#recent-entries');
  recent.innerText = "";

  renderList(array, recent);

  
};


var updateRecent = function(){
  getAllEntries('/api/diary', getLastXEntries);
  
}

var showAll = function(){
  var seeAllView = document.querySelector('#see-all-view');
  seeAllView.style.display = "flex";
  seeAllView.innerText = "";
  var ul = document.createElement('ul');
  seeAllView.appendChild(ul);
  var all = JSON.parse(this.responseText).reverse();

  renderList(all, ul);

}

var diaryView = function(){
  var diarySubmit = document.querySelector('#diary-submit');
  var diaryInput = document.querySelector('#diary-input');

  var seeAll = document.querySelector('#toggle-view');
  
  diarySubmit.onclick = function(){
    if(!diaryInput.value){
      alert('You need to type something!');
      return;
    }
    var entry = new Diary(diaryInput.value);

    diaryInput.value = "";  
    entry.setWhere(function(){
      makePostRequest('/api/diary', entry, updateRecent);


    });

  };


  seeAll.onclick = function(){
    var newEntryView = document.querySelector('#new-entry-view');
    newEntryView.style.display = "none";
    seeAll.innerText = 'new entry';

    getAllEntries('/api/diary', showAll);
  }
  updateRecent();
}



module.exports = diaryView;
