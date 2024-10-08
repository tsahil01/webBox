import { TerminalIcon } from "lucide-react";
import "@xterm/xterm/css/xterm.css";

export default function Terminal({
  terminalRef,
  containerId,
}: {
  terminalRef: any;
  containerId: string | null;
}) {
  return (
    <div className="bg-zinc-950 rounded-md flex flex-col p-3 h-full overflow-auto">
      <div
        className="bg-black rounded-lg shadow-lg w-full flex-grow scroll-m-0"
        ref={terminalRef}
      />
    </div>
  );
}
