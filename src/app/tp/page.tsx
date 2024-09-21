"use client";

import Terminal from "@/components/term";
import { socket } from "@/socket";
import { useEffect, useRef, useState } from "react";
import { Terminal as XTerminal } from "@xterm/xterm";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [containerId, setContainerId] = useState<string | null>("f67344cf4901");
  const terminalRef = useRef<HTMLDivElement>(null);
  const [term, setTerm] = useState<XTerminal | null>(null);

  useEffect(() => {
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

    // if (socket.connected) {
      handleConnect();
    // }
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
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("output", handleOutput);
    };
  }, [containerId]); // Run effect only when containerId changes

  return (
    <div>
      <p>Status: {isConnected ? "connected" : "disconnected"}</p>
      <Terminal terminalRef={terminalRef} containerId={containerId} />
    </div>
  );
}
