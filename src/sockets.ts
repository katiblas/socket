import { Server, Socket } from 'socket.io';

export class Sockets {
  io: Server;

  constructor(io: Server) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', (socket: Socket) => {
      console.log('conectado');

      socket.on('send:coment', (data) => {
        console.log({ data });
        this.io.emit('send:coment', data);
      });
    });
  }
}
