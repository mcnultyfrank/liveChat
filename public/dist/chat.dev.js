"use strict";

//8 make connection in separate script file
var socket = io.connect('http://localhost:8000/');
console.log(socket); //DOM

var handle = document.querySelector(".handle");
var message = document.querySelector(".message");
var button = document.querySelector(".send");
var output = document.querySelector('.textOutput');
var nameElement = document.createElement('h1');
var messageElement = document.createElement('h3');
nameElement.style.color = 'lightblue';
button.addEventListener("click", function () {
  console.log('works');
  socket.emit('chat', {
    message: message.value // handle: handle.value

  });
  message.value = "";
});
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    console.log('works');
    socket.emit('chat', {
      message: message.value // handle: handle.value

    });
    message.value = "";
  }
}); //12 listening for the events

socket.on('chat', function (data) {
  // output.innerHTML += '<h3>' + data.handle.charAt(0).toUpperCase()+data.handle.slice(1) + ': ' + '</h3>' + '<p>' + data.message.charAt(0).toUpperCase()+data.message.slice(1) + '</p>';
  output.innerHTML += '<h4>' + data.message.charAt(0).toUpperCase() + data.message.slice(1) + '</h4>';
});