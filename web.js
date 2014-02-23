var express = require("express");
var logfmt = require("logfmt");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');


app.use(logfmt.requestLogger());


var port = Number(process.env.PORT || 8080);
server.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/', function(req, res) {
  io.sockets.emit('flap');
  res.send('id: ' + req.query.z);
});

io.sockets.on('connection', function (socket) {
  socket.on('flap', function (data) {
    console.log('flap is made.');
  });
});

app.use(express.static(path.join(__dirname, 'static')));
