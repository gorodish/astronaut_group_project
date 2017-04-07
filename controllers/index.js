var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', path.join(__dirname + '../client/index.html'));