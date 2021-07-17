import { Iot } from 'aws-sdk';
import * as socketio from 'socket.io';

let connection = null;

class SocketService {
  private io: socketio.Server;

  constructor() {
    this.io = new socketio.Server();
  }

  initSockets() {
    this.io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });

      this.io.on('next', (message) => {
        console.log('message inside next event, coming from client');
        console.log(message);
      });
    });
  }

  broadcast(event, message) {
    //message :{current,next} 
    this.io.emit(event, message);
  }

  static init(server) {
    if (!connection) {
      connection = new SocketService();
      connection.io.listen(server, {
        cors: {
          origin: '*',
          methods: ['GET', 'POST'],
          // allowedHeaders: ["my-custom-header"],
          // credentials: true
        },
      });
      connection.initSockets();
    }
  }

  static getConnection() {
    if (connection) {
      console.log(connection)
      return connection;
    }
  }
}

module.exports = {
  socketInit: SocketService.init,
  connection: SocketService.getConnection,
};
