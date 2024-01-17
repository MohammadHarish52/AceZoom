import React from "react";
import { SocketContext } from "../providers/Socket";

export const useSocket = () => {
  return React.useContext(SocketContext);
};
