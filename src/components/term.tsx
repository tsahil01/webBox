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
    <div className="bg-zinc-950 rounded-md flex flex-col gap-3 p-3 overflow-auto">
      <div className="flex gap-2 my-auto border-b mb-4 p-2 justify-center">
        <TerminalIcon className="w-9 h-9 text-white" />
        <div className="text-4xl font-bold text-white my-auto">Web - Terminal</div>
      </div>
      <div
        className="bg-black rounded-lg shadow-lg w-full h-full  scroll-m-0"
        ref={terminalRef} // Set explicit dimensions
      />
    </div>
  );
}
