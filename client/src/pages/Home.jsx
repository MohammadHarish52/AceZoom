import { useSocket } from "../providers/Socket";

const Home = () => {
  const { socket } = useSocket();
  socket.emit("join-room", { roomId: "1", emailId: "elvishbhai123@gmail.com" });
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Join a Room</h1>
        <input
          className="w-full border p-2 mb-4"
          type="email"
          placeholder="Enter your email"
        />
        <input
          className="w-full border p-2 mb-4"
          type="text"
          placeholder="Enter room code"
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          type="button"
        >
          Enter Room
        </button>
      </div>
    </div>
  );
};

export default Home;
