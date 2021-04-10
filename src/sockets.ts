import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export class Sockets {
  io: Server<DefaultEventsMap, DefaultEventsMap>;

  constructor(io: Server<DefaultEventsMap, DefaultEventsMap>) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', (socket: Socket) => {
      socket.on('send:coment', (data) => {
        console.log(data);
        this.io.emit('send:coment', data);
      });
    });
  }
}
