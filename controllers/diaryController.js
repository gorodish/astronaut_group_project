var express = require('express');
var router = express.Router();
var path = require('path');
var htmlPage = path.join(__dirname + '/../client/build/pages/diary.html');
var Query = require('../client/db/diaryQuery');
var query = new Query();
var Diary = require('../client/src/models/DiaryConstructor');
var bodyParser = require('body-parser');

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: true}));


router.get('/', function(req, res){
  res.sendFile(htmlPage);
});

router.post('/', function(req, res){  
console.log(req);
  query.add(req, function(result){
    res.json(result);
  });
});

module.exports = router;