"use strict";

//0 add express
var express = require('express'); //4 add socket io to work with web sockets


var socket = require('socket.io'); //1. express app created


var app = express();
var port = 8000; //2. created server 

var server = app.listen(port, function () {
  console.log("server is running on ".concat(port));
});
app.use(express["static"]('public')); //5. new variable = socket() with server variable passed in

var io = socket(server); // 6 listening out for connection, once made fire back callback

io.on('connection', function (socket) {
  console.log('socket id =', socket.id, 'connection is', socket.connected); //9. listen for message being sent from the client

  socket.on('chat', function (data) {
    //10. send message out to all clients on socket
    //11. we want to emit message with the data to all clients
    io.sockets.emit('chat', data);
  });
});