



var clockView = function(){
  var headingClock = document.querySelector('#heading-clock');
  var ul = document.createElement('ul');

  headingClock.appendChild(ul);

  var utcDate = document.createElement('li');
  var moskovskoeVremya = document.createElement('li');
  var houstonTime = document.createElement('li');
  var utcTime = document.createElement('li');
  // var 
  ul.appendChild(utcDate);
  ul.appendChild(utcTime);
  ul.appendChild(moskovskoeVremya);
  ul.appendChild(houstonTime);
  

  setInterval(function(){
    // var epochTime = Date.now();
    // console.log(epochTime);
    var epochTime = new Date();
    utcDate.innerText = 'Date (UTC): ' + epochTime.toLocaleDateString();
    utcTime.innerText = 'UTC: ' + epochTime.toLocaleTimeString('UTC', {timeZone: 'UTC'});
    moskovskoeVremya.innerText = 'Москва: ' + epochTime.toLocaleTimeString('ru-RU', {timeZone: 'Europe/Moscow'});
    houstonTime.innerText = 'Houston: ' + epochTime.toLocaleTimeString('en-US', {timeZone: 'CDT'});
  }, 1000)
}

module.exports = clockView;