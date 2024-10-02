import { useEffect, useState } from "react"
import { io } from "socket.io-client"

export function useSocket() {
    const [socket, setSocket] = useState<any>(null)
  
    useEffect(() => {
      const socketIo = io()
  
      setSocket(socketIo)
  
      function cleanup() {
        socketIo.disconnect()
      }
      return cleanup
  
      // should only run once and not on every re-render,
      // so pass an empty array
    }, [])
  
    return socket
  }