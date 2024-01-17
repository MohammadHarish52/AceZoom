import { useState, useEffect } from "react";
import { useSocket } from "../Constansts/constant";

const Home = () => {
  const { socket } = useSocket();
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");

  const handleRoomJoined = ({ roomId }) => {
    console.log(`User joined room ${roomId}`);
  };

  useEffect(() => {
    // Ensure that the socket is initialized before emitting events
    if (socket) {
      // Example usage, adjust as needed
      socket.emit("join-room", {
        roomId: "1",
        emailId: "elvishbhai123@gmail.com",
      });
      socket.on("joined-room", handleRoomJoined);
    }
  }, [socket]);

  const handleJoinRoom = () => {
    if (socket) {
      socket.emit("join-room", { emailId: email, roomId });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Join a Room</h1>
        <input
          className="w-full border p-2 mb-4"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border p-2 mb-4"
          type="text"
          value={roomId}
          placeholder="Enter room code"
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          type="button"
          onClick={() => handleJoinRoom()}
        >
          Enter Room
        </button>
      </div>
    </div>
  );
};

export default Home;
