var express = require('express');
var router = express.Router();
var path = require('path');
var htmlPage = path.join(__dirname + '/../client/build/pages/events.html');

router.get('/', function(req, res){
  res.sendFile(htmlPage);
});

module.exports = router;