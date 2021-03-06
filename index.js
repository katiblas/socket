// var http = require('http');
// var server = http.createServer(handler);
// var io = require('socket.io')(server);

// server.listen(3000);

// function handler(req, res) {
//     res.writeHead(200);
//     res.end('Hello Http');
// }

// io.on('connection', function(socket) {
//     socket.emit('news', { hello: 'world' });
//     console.log('connected!');
// });

// const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();

//start server
// app.set('port', process.env.PORT || 3000);
const PORT = Number(process.env.PORT || 3000);

// app.use(express.static(path.join(__dirname, '../esadt/student')))
const server = app.listen(PORT, () => {
  console.log('Server on port', PORT);
});
//websocket
const SocketIO = require('socket.io');

const io = SocketIO(server);
io.on('connection', (socket) => {
  // socket.emit('news', { hello: 'world' });
  console.log('conectado!!');
  socket.on('send:coment', (data) => {
    console.log('recibido');
    console.log(data);
    io.emit('send:coment', data);
  });
});
