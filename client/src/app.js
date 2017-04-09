var makeRequest= function(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.onload = callback;
  xhr.open("GET", url);
  xhr.send(); 
}

var app = function(){
  var btn = document.querySelector("#SubmitBtn");
  var input = document.querySelector("#SearchField");
  btn.onclick = function(){
  var youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD-DrQFCTZv7slK1SPSJa3QQCrgDHIC3q8&q=' + input.value;

makeRequest(youTubeUrl, function(){
  var details = JSON.parse(this.responseText);
  console.log(details.items[0].snippet.title);
  })


  }
  

  

}

window.onload = app;
