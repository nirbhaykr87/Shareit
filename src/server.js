const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());



const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  }
});

const rooms = {};

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('join_room', ({ roomId, nickname }) => {
    socket.join(roomId);

    if (!rooms[roomId]) {
      rooms[roomId] = { members: [], files: [] };
    }

    if (!rooms[roomId].members.includes(nickname)) {
      rooms[roomId].members.push(nickname);
    }
    socket.nickname = nickname;
    socket.roomId = roomId;

    io.to(roomId).emit('room_members', rooms[roomId].members);
    io.to(roomId).emit('file_shared', rooms[roomId].files);
    console.log(`User ${nickname} joined room: ${roomId}`);
  });

  socket.on('share_file', (data) => {
    const { roomId, file } = data;
    if (rooms[roomId]) {
      rooms[roomId].files.push(file);
      io.to(roomId).emit('file_shared', rooms[roomId].files);
      console.log(`File shared in room ${roomId}:`, file);
    }
  });

  socket.on('disconnect', () => {
    const roomId = socket.roomId;
    if (roomId && rooms[roomId]) {
      rooms[roomId].members = rooms[roomId].members.filter(nickname => nickname !== socket.nickname);
      io.to(roomId).emit('room_members', rooms[roomId].members);
      console.log(`User ${socket.nickname} left room: ${roomId}`);
    }
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
