var express = require('express');
var router = express.Router();
var path = require('path');
var htmlPage = path.join(__dirname + '/../client/build/pages/diary.html');
var Query = require('../client/db/diaryQuery');
var query = new Query();
var bodyParser = require('body-parser');

var Diary = require('../client/src/models/DiaryConstructor');


router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: true}));


router.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  })
});

router.post('/', function(req, res){  
  console.log(req.body);
  query.add(req.body, function(result){
    res.json(result);
  })
});

module.exports = router;