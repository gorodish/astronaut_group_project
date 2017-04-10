



var clockView = function(){
  var heading = document.querySelector('#heading');
  var ul = document.createElement('ul');

  heading.appendChild(ul);

  var epoch = document.createElement('li');
  ul.appendChild(epoch);

  setInterval(function(){
    // var epochTime = Date.now();
    // console.log(epochTime);
    var epochTime = new Date();
    epoch.innerText = epochTime;
  }, 1000)
}

module.exports = clockView;