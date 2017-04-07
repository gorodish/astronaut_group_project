var express = require('express');
var path = require('path');
var router = express.Router
var client = path.join(__dirname + '../client/');

router.get('/', client + 'index.html');

router.get('/events', client + 'events.html');