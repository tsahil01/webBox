"use client";

import Terminal from "@/components/term";
import { useEffect, useRef, useState } from "react";
import { Terminal as XTerminal } from "@xterm/xterm";
import { useSocket } from "../hooks/useSocket";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [containerId, setContainerId] = useState<string | null>("203eba58e0e6");
  const terminalRef = useRef<HTMLDivElement>(null);
  const [term, setTerm] = useState<XTerminal | null>(null);

  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    const newTerm = new XTerminal({
      cursorBlink: true,
      fontSize: 16,
      rows: 20,
      cols: 90,
    });
    setTerm(newTerm);

    const handleConnect = () => {
      console.log("Connected to the socket server");
      if (containerId) {
        socket.emit("containerId", containerId);
        setIsConnected(true);
      } else {
        console.warn("Container ID is not available yet.");
      }
    };

    const handleOutput = (data: any) => {
      if (newTerm) {
        newTerm.write(data);
      }
    };

    const handleDisconnect = () => {
      console.log("Disconnected from the socket server");
      setIsConnected(false);
    };

    if (socket.connected) {
      handleConnect();
      setIsConnected(true);
    }

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("output", handleOutput);


    newTerm.onData((data: any) => {
      socket.emit("input", data);
    });

    if (terminalRef.current) {
      newTerm.open(terminalRef.current);
    }

    return () => {
      newTerm.dispose();
      if (socket) {
        socket.off("connect", handleConnect);
        socket.off("disconnect", handleDisconnect);
        socket.off("output", handleOutput);
      }
    };
  }, [socket, containerId]);
  return (
    <div>
      <p>Status: {isConnected ? "connected" : "disconnected"}</p>
      <Terminal terminalRef={terminalRef} containerId={containerId} />
    </div>
  );
}
