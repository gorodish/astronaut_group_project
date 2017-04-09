var express = require('express');
var path = require('path');
var router = express.Router();
var build = path.join(__dirname + '/../client/build/');

router.use('/api/diary', require('./diaryController'));

router.get('/', function(req, res){
  res.sendFile(build + 'index.html');
});

router.get('/events/', function(req, res){
  res.sendFile(build + 'pages/events.html');
});

router.get('/map/', function(req, res){
  res.sendFile(build + 'pages/map.html');
});

router.get('/youtube/', function(req, res){
  res.sendFile(build + 'pages/youtube.html');
});

router.get('/diary', function(req, res){
  res.sendFile(build + 'pages/diary.html');
});

module.exports = router;