var express = require('express');
var path = require('path');
var router = express.Router();
var build = path.join(__dirname + '/../client/build/');

router.use('/diary', require('./diaryController'));

router.get('/', function(req, res){
  res.sendFile(build + 'index.html');
});

router.get('/events/', function(req, res){
  res.sendFile(build + 'pages/events.html');
});

router.get('/map/', function(req, res){
  res.sendFile(build + 'pages/events.html');
});

router.get('/youtube/', function(req, res){
  res.sendFile(build + 'pages/events.html');
});

module.exports = router;