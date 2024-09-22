"use client";

import Terminal from "@/components/term";
import { useEffect, useRef, useState } from "react";
import { Terminal as XTerminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { WebLinksAddon } from "@xterm/addon-web-links";
import { useSocket } from "../hooks/useSocket";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [containerId, setContainerId] = useState<string | null>("203eba58e0e6");
  const terminalRef = useRef<HTMLDivElement>(null);

  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    const newTerm = new XTerminal({
      cursorBlink: true,
      fontSize: 16,
      fontWeight: "800",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      theme: {
        background: '#1a1b26',
        foreground: '#a9b1d6',
        cursor: '#f7768e',
        selection: 'rgba(73, 186, 255, 0.3)',
        black: '#32344a',
        red: '#f7768e',
        green: '#9ece6a',
        yellow: '#e0af68',
        blue: '#7aa2f7',
        magenta: '#ad8ee6',
        cyan: '#449dab',
        white: '#787c99',
        brightBlack: '#444b6a',
        brightRed: '#ff7a93',
        brightGreen: '#b9f27c',
        brightYellow: '#ff9e64',
        brightBlue: '#7da6ff',
        brightMagenta: '#bb9af7',
        brightCyan: '#0db9d7',
        brightWhite: '#acb0d0',
      },
      allowTransparency: true,
      scrollback: 1000,
      rightClickSelectsWord: true,
    });

    const fitAddon = new FitAddon();
    const webLinksAddon = new WebLinksAddon();

    newTerm.loadAddon(fitAddon);
    newTerm.loadAddon(webLinksAddon);

    const handleConnect = () => {
      console.log("Connected to the socket server");
      if (containerId) {
        socket.emit("containerId", containerId);
        setIsConnected(true);
      } else {
        console.warn("Container ID is not available yet.");
      }
    };

    const handleOutput = (data: string) => {
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

    newTerm.onData((data: string) => {
      socket.emit("input", data);
    });

    if (terminalRef.current) {
      newTerm.open(terminalRef.current);
      fitAddon.fit();
    }

    window.addEventListener('resize', () => fitAddon.fit());

    return () => {
      newTerm.dispose();
      if (socket) {
        socket.off("connect", handleConnect);
        socket.off("disconnect", handleDisconnect);
        socket.off("output", handleOutput);
      }
      window.removeEventListener('resize', () => fitAddon.fit());
    };
  }, [socket, containerId]);

  return (
    <div className="p-4">
      <p>Status: {isConnected ? "connected" : "disconnected"}</p>
      <Terminal terminalRef={terminalRef} containerId={containerId} />
    </div>
  );
}