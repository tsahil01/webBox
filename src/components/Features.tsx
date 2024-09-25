import { Code2Icon, TerminalSquare, CloudIcon } from "lucide-react"
import Image from "next/image"

export default function Features() {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-5 p-5 mt-4">
        <h3 className="text-4xl md:text-5xl font-bold mx-auto">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-6">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 p-5 md:col-span-2 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0))] bg-indigo-900 rounded-xl h-auto md:h-[400px]">
            <div className="flex items-center justify-center md:hidden mb-4">
              <img src={'/vscode.png'} alt="vscode" className="w-32 h-32 md:w-48 md:h-48"></img>
            </div>
            <div className="flex flex-col gap-5 justify-center md:p-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-white">
                VS Code IDE for Rapid Development
              </h2>
              <p className="text-center md:text-left text-gray-200">
                Access a powerful VS Code instance anywhere. Start coding quickly and efficiently with our cloud-based development environment.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img src={'/vscode.png'} alt="vscode" className="w-32 h-32 md:w-48 md:h-48"></img>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 p-5 md:col-span-1 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0))] bg-emerald-900 rounded-xl h-auto md:h-[400px]">
            <div className="flex items-center justify-center mb-4 md:mb-0">
              <img src={'/terminal.png'} alt="terminal" className="w-32 h-32 md:w-48 md:h-48"></img>
            </div>
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left text-white">
                Integrated Terminal
              </h2>
              <p className="text-center md:text-left text-gray-200">
                Execute commands and manage your project with our built-in terminal. Seamlessly interact with your development environment.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 p-5 md:col-span-3 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0))] bg-purple-900 rounded-xl h-auto md:h-[400px]">
            <div className="flex items-center justify-center md:hidden mb-4">
              <img src={'/cloud.png'} alt="cloud" className="w-32 h-32 md:w-48 md:h-48"></img>
            </div>
            <div className="flex flex-col gap-5 justify-center md:p-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-white">
                Disposable Workspaces
              </h2>
              <p className="text-center md:text-left text-gray-200">
                Create and destroy development environments instantly. Perfect for testing, short-term projects, or isolated development tasks.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img src={'/cloud.png'} alt="cloud" className="w-32 h-32 md:w-48 md:h-48"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}