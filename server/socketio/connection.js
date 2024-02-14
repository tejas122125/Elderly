// Import required modules
import { createServer } from 'http';
import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors'
// import io from "socket.io"

// Create an Express app
const app = express();
const server = createServer(app)
const io = new Server(server,{
  cors:{
    origin:"*",
    methods:["GET","POST"],
    credentials:true,
  }
})
// app.use(cors({ origin:'http://localhost:5173', 
// credentials:true,            
// optionSuccessStatus:200}))
app.use(cors())
app.get("/test",(req,res)=>{
  res.send(JSON.stringify("hello monu bhai"))
})
// Create a Socket.IO server instance
// const io = require("socket.io")(3000,{
//   cors:{
//     origin : ['http://localhost:5173'],
//   }
// })
// io.origins('*:*');
// io.use(cors(
//  { origin:'http://localhost:5173', 
//   credentials:true,            
//   optionSuccessStatus:200}
// ));

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