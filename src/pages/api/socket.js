"use server"
import { Server } from 'socket.io'

export default function handler(req, res) {
  const cookieUser = req.cookies.user
  const loginUser = JSON.parse(cookieUser)
  if (!res.socket.server.io) {
    const httpServer = res.socket.server;
    const io = new Server(httpServer, {
      path: "/api/socket"
    });
    io.on('connection', (socket) => {
      socket.on('join', (chat_id) => {
        socket.join(chat_id)
        socket.broadcast.to(chat_id).emit("adminMessage", {
          name: "admin",
          content: `${chat_id} has joined`,
        });
      });
      socket.on('newMessage', function(data){
        io.emit('serverMessage', data.message)
      });
      console.log('Client connected');
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
    res.socket.server.io = io;
  }
  res.end();
}

