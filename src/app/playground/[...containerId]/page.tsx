"use client"

import { validateUser } from "@/app/actions/validatePlayground"
import BrowserComponent from "@/components/Browser"
import TerminalComponent from "@/components/TerminalComponent"
import { Button } from "@/components/ui/button"
import { IconBrowser } from "@tabler/icons-react"
import { Code2Icon, Terminal } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"

enum TabType {
  CODE,
  TERMINAL,
  WEBVIEW,
}

interface TabData {
  type: TabType
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export default function Component({ params }: { params: { containerId: string } }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [tabs, setTabs] = useState<TabData[]>([])

  const codeRef = useRef<HTMLIFrameElement>(null)
  const webviewRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const validate = async () => {
      const isValid = await validateUser(params.containerId[0])
      if (!isValid) {
        console.log("Invalid user or container OR this container is not allocated to this user.")
        router.push("/")
      } else {
        setLoading(false)
        initializeTabs()
      }
    }
    validate()
  }, [params, router])

  const initializeTabs = () => {
    setTabs([
      {
        type: TabType.CODE,
        title: "Code Editor",
        icon: <Code2Icon className="w-4 h-4" />,
        content: (
          <iframe
            ref={codeRef}
            src="http://localhost:8080/"
            className="w-full h-full border-none"
            title="Code"
          />
        ),
      },
      {
        type: TabType.TERMINAL,
        title: "Terminal",
        icon: <Terminal className="w-4 h-4" />,
        content: <TerminalComponent />,
      },
      {
        type: TabType.WEBVIEW,
        title: "Web View",
        icon: <IconBrowser className="w-4 h-4" />,
        content: (
          <BrowserComponent/>
        ),
      },
    ])
  }

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index)
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen bg-zinc-900 text-white">Loading...</div>
  }

  return (
    <div className="bg-zinc-900 h-screen w-screen flex flex-col gap-2">
      <div className="flex bg-zinc-800 w-full border-b border-zinc-700">
        <div className="flex flex-row w-full px-2 gap-4 my-1">
          {tabs.map((tab, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTabIndex === index
                  ? "text-white bg-zinc-700"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-700"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </Button>
          ))}
        </div>
      </div>
      <div className="flex-grow flex overflow-auto rounded">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`w-full h-full${
              activeTabIndex === index ? "opacity-100 visible" : "opacity-0 invisible absolute"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}