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
    <div className="bg-black p-3 rounded-md flex flex-col gap-3 h-full">
      <div className="flex gap-1 my-auto">
        <TerminalIcon className="w-9 h-9 text-white" />
        <div className="text-xl font-bold text-white my-auto">Terminal</div>
      </div>

      <div
        className="bg-black rounded-lg shadow-lg w-full h-full"
        ref={terminalRef}
        style={{ flex: 1, height: "400px" }} // Set explicit dimensions
      />
    </div>
  );
}
