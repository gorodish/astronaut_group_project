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


var renderList = function(array, element, short){
  array.forEach(function(entry){
   var text = document.createElement('li');
   text.classList.add('diary-text');

   var diaryText = entry.text;

   if(short){
     diaryText.length > 140 ? diaryText = diaryText.substring(0,139)+"..." : null;
   };

   text.innerText = diaryText;
   element.appendChild(text);

   var childList = document.createElement('ul');
   childList.classList.add('diary-metadata');
   text.appendChild(childList);


   var date = document.createElement('li');
   date.innerText = new Date(entry.timeSinceEpoch);
   childList.appendChild(date);

   var where = document.createElement('li');
   where.innerText = entry.where.lat + ", " + entry.where.lng;
   childList.appendChild(where);

   var hr = document.createElement('hr');
   element.appendChild(hr);
 })
}


var populateRecent = function(array){
  var recent = document.querySelector('#recent-entries');
  recent.innerText = "";

  renderList(array, recent, true);

  
};


var updateRecent = function(){
  getAllEntries('/api/diary', getLastXEntries);
  
}

var showAll = function(){
  var seeAllView = document.querySelector('#see-all-view');
  var ul = document.createElement('ul');
  seeAllView.appendChild(ul);
  var all = JSON.parse(this.responseText).reverse();

  renderList(all, ul);

}

var diaryView = function(){
  var diarySubmit = document.querySelector('#diary-submit');
  var diaryInput = document.querySelector('#diary-input');

  var seeAll = document.querySelector('#toggle-to-all');
  var toggleToNew = document.querySelector('#toggle-to-new');
  
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
    var seeAllView = document.querySelector('#see-all-view');

    newEntryView.style.display = "none";
    seeAllView.style.display = "block";
    getAllEntries('/api/diary', showAll);

  }

  toggleToNew.onclick = function(){
    var newEntryView = document.querySelector('#new-entry-view');
    var seeAllView = document.querySelector('#see-all-view');

    newEntryView.style.display = "block";
    seeAllView.style.display = "none";
  }
  updateRecent();
}



module.exports = diaryView;
