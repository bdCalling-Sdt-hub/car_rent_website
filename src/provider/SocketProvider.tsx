"use client";
// src/context/SocketContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { jwtDecode } from "jwt-decode";

interface SocketContextProps {
  socket: Socket | null;
  onlineUser: string[];
}

const SocketContext = createContext<SocketContextProps>({
  socket: null,
  onlineUser: [],
});

export const useSocket = () => {
  return useContext(SocketContext);
};

type tDecode = {
  authId: string;
  email: string;
  exp: number;
  iat: number;
  role: string;
  userId: string;
};

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUser, setOnlineUser] = useState<string[]>([]);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    // Get token from localStorage or some async API (e.g., authentication context)
    const savedToken = localStorage.getItem("_token");
    if (savedToken) {
      const decoded: tDecode = jwtDecode(savedToken as string);
      if (decoded) {
        setId(decoded?.userId);
      }
    }
  }, []);

  useEffect(() => {
    if (!id) return;

    const socketConnection = io(`https://api.nardo.app`, {
      query: {
        userId: id,
      },
    });

    socketConnection.on("onlineUser", (data) => {
      setOnlineUser(data); 
    });

    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect(); 
    };
  }, [id]); 

  return (
    <SocketContext.Provider value={{ socket, onlineUser }}>
      {children}
    </SocketContext.Provider>
  );
};
