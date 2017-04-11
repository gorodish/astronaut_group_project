<<<<<<< HEAD

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
=======
var deadline = '23/04/2017 07:13:00 GMT+0200';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
>>>>>>> feature/clock
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
<<<<<<< HEAD
}

function initializeClock(id, endtime) {
=======
};

getTimeRemaining(deadline).minutes;

function initializeClock(id, endtime){
>>>>>>> feature/clock
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

<<<<<<< HEAD
  function updateClock() {
=======
  function updateClock(){
>>>>>>> feature/clock
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

<<<<<<< HEAD
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
=======
    if(t.total<=0){
      clearInterval(timeinterval);
    };
  }

  updateClock(); // run function once at first to avoid delay
  var timeinterval = setInterval(updateClock,1000);
};

>>>>>>> feature/clock
initializeClock('clockdiv', deadline);

module.exports = countdownView;