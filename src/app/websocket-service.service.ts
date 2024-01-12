// import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';

// @Injectable({
//   providedIn: 'root'
// })
// export class WebSocketService {

//   constructor(private socket: Socket) { }

//   public connect(): void {
//     this.socket.connect();
//     console.log("connected")
//   }

//   // public disconnect(): void {
//   //   this.socket.disconnect();
//   // }

//   public sendData(message: string): void {
//     this.socket.emit('send-data', message);
//   }

//   public receiveData() {
//     return this.socket.fromEvent('chart-data');
//   }
// }
