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
    message: message.value // handle: handle.value

  });
  message.value = "";
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  output.getElementsByTagName('h4')[0].style.backgroundColor = "#" + randomColor; // console.log(output.getElementsByTagName('h4')[0].style.backgroundColor = "blue");
});
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 13 && message.value != "" && message.value != " ") {
    socket.emit('chat', {
      message: message.value,
      handle: handle.value
    });
    handle.value = "";
    message.value = "";
  }
}); //12 listening for the events

socket.on('chat', function (data) {
  // output.innerHTML += '<h3>' + data.handle.charAt(0).toUpperCase()+data.handle.slice(1) + ': ' + '</h3>' + '<p>' + data.message.charAt(0).toUpperCase()+data.message.slice(1) + '</p>';
  output.innerHTML += '<h4>' + data.handle.charAt(0).toUpperCase() + data.handle.slice(1) + ": " + data.message.charAt(0).toUpperCase() + data.message.slice(1) + '</h4>';
}); // display user typing

socket.on('typing', function (data) {
  console.log(data);
  output.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
}); // color.innerHTML = "#" + randomColor;