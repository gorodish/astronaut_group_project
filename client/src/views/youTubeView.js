var makeRequest= function(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.onload = callback;
  xhr.open("GET", url);
  xhr.send(); 
}

var completeRequest = function(){
  var details = JSON.parse(this.responseText);
  var results = document.querySelector("#Results");
  var ul = document.querySelector("#resultsUl");
  results.innerText ="";
  
  results.appendChild(ul);


  details.items.forEach(function(video){
    console.log(video);

    var a = document.createElement("a");
    var vidId = video.id.videoId;
    a.href = 'https://www.youtube.com/watch?v=' + vidId;

    var resultDiv = document.createElement('div');
    resultDiv.classList.add('yt-search-result');
    resultDiv.setAttribute('class', 'video-link');
    a.appendChild(resultDiv);

    var title = document.createElement("p");
    title.innerText = video.snippet.title;
    resultDiv.appendChild(title);

    var thumbnail = document.createElement("p");
    var img = document.createElement("img");
    img.src = video.snippet.thumbnails.default.url;
    thumbnail.appendChild(img);
    resultDiv.appendChild(thumbnail);

    var description = document.createElement("p");
    description.innerText = video.snippet.description;
    resultDiv.appendChild(description);

    results.appendChild(a);
  })
}

var youtube = function(){
  var btn = document.querySelector("#SubmitBtn");
  var input = document.querySelector("#SearchField");
  btn.onclick = function(){
    var youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD-DrQFCTZv7slK1SPSJa3QQCrgDHIC3q8&q=' + input.value;

    makeRequest(youTubeUrl, completeRequest);
  }

  var youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD-DrQFCTZv7slK1SPSJa3QQCrgDHIC3q8&q=space';
  makeRequest(youTubeUrl, completeRequest);
}

module.exports = youtube;
