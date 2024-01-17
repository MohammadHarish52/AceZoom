import React, { useMemo } from "react";

import { io } from "socket.io-client";

export const SocketContext = React.createContext(null);

const SocketProvider = (props) => {
  const socket = useMemo(() => io("http://localhost:8001"), []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
