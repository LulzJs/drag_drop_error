var browserify = require('browserify-middleware');
var express = require('express');
var app = express();
var path = require('path');

app.get('/bundle.js', browserify(__dirname + '/index.js'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);
console.log('Listening on port 3000');