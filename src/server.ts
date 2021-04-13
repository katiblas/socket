// Servidor de Express
import express, { Express } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import cors from 'cors';

import { Sockets } from './sockets';
import { PORT } from './config';

export class APP {
  app: Express;
  port: number;
  server: http.Server;
  io: Server;

  constructor() {
    this.app = express();
    this.port = PORT;

    // Http server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = new Server(this.server);
  }

  middlewares() {
    // Desplegar el directorio público
    this.app.use(express.static(path.resolve(__dirname, '../public')));

    // CORS
    this.app.use(cors());
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar sockets
    this.configurarSockets();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log('Server corriendo en puerto:', this.port);
    });
  }
}
