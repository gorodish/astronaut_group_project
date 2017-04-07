var express = require('express');
var router = express.Router();
var path = require('path');
var htmlPage = path.join(__dirname + '/../client/build/pages/diary.html');

router.get('/api/diary', function(req, res){
  res.sendFile(htmlPage);
});

module.exports = router;