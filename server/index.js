const express = require("express");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

const io = new Server({
  cors: true,
});
const app = express();

app.use(bodyParser.json());

//email to socket mapping
const emailToSocketMap = new Map();

io.on("connection", (socket) => {
  console.log("new connection elvish bhai");

  socket.on("join-room", (data) => {
    //give me your room id and emailid
    const { roomId, emailId } = data;
    console.log("user", emailId, "joined the room", roomId);

    emailToSocketMap.set(emailId, socket);
    //socket joined with the roomid
    socket.join(roomId);
    socket.emit("joined-room", { roomId });
    //broadcast the emialid of the user that joined the room
    socket.broadcast.to(roomId).emit("user-joined", { emailId });
  });
});

app.listen(8000, () => {
  console.log("port is listening on 8000");
});
io.listen(8001);
