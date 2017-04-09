var Diary = require('../diaryModel');
var assert = require('assert');

describe('diary', function(){

  var diary;

  beforeEach(function(){
    diary = new Diary();

  });

  it('has absolute timestamp', function(){
    assert(diary.timeSinceEpoch);
  });



  it('has null text when instantiated');

  it('instantiates with a time');

  it('instantiates with a latitute and longitude');
})