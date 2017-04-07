var MongoClient = require('mongodb').MongoClient;

var DiaryQuery = function(){
  this.url = 'mongodb://localhost:27017/diary';
};

DiaryQuery.prototype = {
  add: function(newEntry, onQueryFinished){
     MongoClient.connect(this.url, function(err, db){
       if(db){
         var collection = db.collection('diary');
         collection.insert(newEntry);
         collection.find().toArray(function(err, docs){
           onQueryFinished(docs);
         })
       }
     })
   }
};