var express = require('express');
var router = express.Router();
var path = require('path');
var htmlPage = path.join(__dirname + '/../client/build/pages/diary.html');

router.get('/', function(req, res){
  res.sendFile(htmlPage);
});

router.post('/', function(req, res){
  console.log('controller: ', 'posting!');
});

module.exports = router;