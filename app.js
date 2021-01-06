//0 add express
const express = require('express');

//4 add socket io to work with web sockets
const socket = require('socket.io');

//1. express app created
const app = express();
const port = 8000;

//2. created server 
let server = app.listen(port, () => {
    console.log(`server is running on ${port}`);
}); 

app.use(express.static('public'));

//5. new variable = socket() with server variable passed in
let io = socket(server);

// 6 listening out for connection, once made fire back callback
io.on('connection', (socket) => {
    console.log('socket id =', socket.id, 'connection is', socket.connected);

    //9. listen for message being sent from the client
    socket.on('chat', (data) => {
        //10. send message out to all clients on socket
        //11. we want to emit message with the data to all clients
        io.sockets.emit('chat', data)
    })
    //13. broadcasts user
    socket.on('typing', (data) => { 
        console.log(socket.broadcast.emit());
        socket.broadcast.emit('typing', data);        
    })
});  


