// page.tsx
"use client";

import Terminal from "@/components/term";
import { socket } from "@/socket";
import { useEffect, useRef, useState } from "react";
import { Terminal as XTerminal } from "@xterm/xterm";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [containerId, setContainerId] = useState<string | null>('f67344cf4901');
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
        setTimeout(() => {
          socket.emit("containerId", containerId);
          setIsConnected(true);
        }, 100); // A short delay to ensure the server is ready
      } else {
        console.warn("Container ID is not available yet.");
      }
    };

    socket.on("connect", handleConnect);

    socket.on("disconnect", () => {
      console.log("Disconnected from the socket server");
      setIsConnected(false);
      setTransport("N/A");
    });

    socket.on("output", (data: any) => {
      if (newTerm) {
        newTerm.write(data); // Write output to terminal
      }
    });

    newTerm.onData((data: any) => {
      socket.emit("input", data);
    });

    if (terminalRef.current) {
      newTerm.open(terminalRef.current); // Open terminal if ref exists
    }

    return () => {
      newTerm.dispose();
      socket.off("connect", handleConnect);
      socket.off("disconnect");
      socket.off("output");
    };
  }, [containerId]);

  return (
    <div>
      <p>Status: {isConnected ? "connected" : "disconnected"}</p>
      <p>Transport: {transport}</p>
      <Terminal terminalRef={terminalRef} containerId={containerId} />
    </div>
  );
}
