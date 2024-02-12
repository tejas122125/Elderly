// Import required modules
import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors'



// Create an Express app
const app = express();
const server = http.createServer(app);

// Create a Socket.IO server instance
const io = new Server(server);
io.use(cors());

io.on("connection",(socket)=>{
console.log("monu is connecting")

socket.on('joinRoom', (room) => {
  socket.join(room);
  console.log(`Socket ${socket.id} joined room ${room}`);
});

socket.on('leaveRoom', (room) => {
  socket.leave(room);
  console.log(`Socket ${socket.id} left room ${room}`);
});
socket.on('elderMessage', (room, message) => {
  io.to(room).emit('message', message);
  console.log(`Message sent to room ${room}: ${message}`);
});

socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
})
server.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
  });