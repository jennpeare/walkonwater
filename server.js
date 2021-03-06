//Get modules.
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
// var fs = require('fs');
var AWS = require('aws-sdk');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

// GET home page
app.get('/', routes.index);

// serve on specified port
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
