var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/'));
app.all('/*', function(req, res) {
  res.sendfile('index.html');
});

var port = process.env.USB_BUILD_LIGHT_WEB_PORT || 9000;
http.createServer(app).listen(port, function() {
  console.log("server listening on port " + port);
});