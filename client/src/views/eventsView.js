var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};


var requestComplete = function() {
  if(this.status !== 200) {
    return;
  }

  var jsonString = this.responseText;
  var localNews = JSON.parse(jsonString).response.results;
  showLocalNews(localNews);
  
};


var showLocalNews = function(localNews) {
  var ul = document.getElementById('home_news_results');
  // select.innerHTML = "";
  localNews.forEach(function(story) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    li.appendChild(a);
    a.href = story.webUrl;
    a.innerText = story.webTitle;
    ul.appendChild(li);
  });
};


var requestCompleteOtherNews = function() {
  if(this.status !== 200) {
    return;
  }
  var jsonString = this.responseText;
  var otherNews = JSON.parse(jsonString).response.results;
  showOtherNews(otherNews);
};


var showOtherNews = function(otherNews, textInput) {
  var ul = document.querySelector("#other_news_results");
  ul.innerHTML = "";
  otherNews.forEach(function(story) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    li.appendChild(a);
    a.href = story.webUrl;
    a.innerText = story.webTitle;
    ul.appendChild(li);
  });
};


var eventsView = function() {
  var urlLocalNews = "http://content.guardianapis.com/search?q=glasgow&api-key=bb37eb6c-2326-4f29-8c7e-242fa3f40114";

  var div = document.querySelector('home_news');
  makeRequest(urlLocalNews, requestComplete);

  var searchNews = document.getElementById("search");
  searchNews.onclick = function(otherNews) {
    var textInput = document.querySelector('#input_search_news');
    var searchWord = textInput.value;
  var urlOtherNews = "http://content.guardianapis.com/search?api-key=bb37eb6c-2326-4f29-8c7e-242fa3f40114&q=" + searchWord;
    console.log(urlOtherNews);
    makeRequest(urlOtherNews, requestCompleteOtherNews);
  }; 
};


module.exports = eventsView;