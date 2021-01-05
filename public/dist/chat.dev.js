"use strict";

//8 make connection in separate script file
var socket = io.connect('http://localhost:8000/');
console.log(socket); //DOM

var handle = document.querySelector(".handle");
var message = document.querySelector(".message");
var button = document.querySelector(".send");
var output = document.querySelector('.textOutput');
button.addEventListener("click", function () {
  console.log('works');
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
}); //12 listening for the events

socket.on('chat', function (data) {
  output.innerHTML += '<p>' + data.handle + ': ' + data.message + '</p>';
});