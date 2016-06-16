var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/'));

var port = 9000;
http.createServer(app).listen(port, function() {
  console.log("server listening on port " + port);
});