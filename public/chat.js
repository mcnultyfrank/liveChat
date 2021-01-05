//8 make connection in separate script file
let socket = io.connect('http://localhost:8000/');
console.log(socket);

//DOM

const handle = document.querySelector(".handle");
const message = document.querySelector(".message");
const button = document.querySelector(".send");
const output = document.querySelector('.textOutput');


button.addEventListener("click", () => {
    console.log('works');
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

//12 listening for the events
socket.on('chat', (data) => {
    output.innerHTML += '<p>' + data.handle + ': ' + data.message + '</p>'; 
})