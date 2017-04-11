

var clockView = function(){
  var headingClock = document.querySelector('#heading-clock');
  var ul = document.createElement('ul');
  ul.id = 'clocks-list';

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
    houstonTime.innerText = 'Houston: ' + epochTime.toLocaleTimeString('en-US', {timeZone: 'America/Chicago'});
  }, 1000);

////////////////////////////////////////////////

  var deadline = 'April 23 2017 23:59:59 GMT+0200';

  function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 ); 
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      days: days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds      
    };
  };

  getTimeRemaining(deadline).minutes;

  function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock(){

      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if(t.total<=0){
        clearInterval(timeInterval);


      };
    }

    updateClock(); // run function once at first to avoid delay
    var timeInterval = setInterval(updateClock,1000);
  };

  initializeClock('clockdiv', deadline);

}

module.exports = clockView;