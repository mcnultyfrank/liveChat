//8 make connection in separate script file
let socket = io.connect('http://localhost:8000/');
console.log(socket);

//DOM

const handle = document.querySelector(".handle");
const message = document.querySelector(".message");
const button = document.querySelector(".send");
const output = document.querySelector('.textOutput');
let nameElement = document.createElement('h1');
let messageElement = document.createElement ('h3');
nameElement.style.color = 'lightblue'

button.addEventListener("click", () => {
    console.log('works');
    socket.emit('chat', {
        message: message.value,
        // handle: handle.value
    })
    message.value = "";
})

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        console.log('works');
        socket.emit('chat', {
            message: message.value,
            // handle: handle.value
        })
        message.value = "";
    }
})



//12 listening for the events
socket.on('chat', (data) => {
    // output.innerHTML += '<h3>' + data.handle.charAt(0).toUpperCase()+data.handle.slice(1) + ': ' + '</h3>' + '<p>' + data.message.charAt(0).toUpperCase()+data.message.slice(1) + '</p>';
    output.innerHTML += '<h4>' + data.message.charAt(0).toUpperCase()+data.message.slice(1) + '</h4>';

})