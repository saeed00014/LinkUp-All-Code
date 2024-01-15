"use client"
import { useState } from "react"
import ChatHeader from "./chatHeader"
import ChatSendBar from "./chatsSendBar"
import Message from "@/app/chats/message"
import { DragedMessageContext } from "../../context/context"

const Chat = () => {
  const [dragedMessage, setDragedMessage] = useState([])

  return (
    <div className="relative flex flex-col justify-between w-full h-auto bg-gray-200 dark:bg-gray-950">
      <DragedMessageContext.Provider 
        value={{ 
            dragedMessage, 
            setDragedMessage
        }}
      >
        <ChatHeader />
        <ul className="relative flex flex-col w-full h-full justify-start items-start py-2 px-2 gap-1 overflow-y-scroll">
          <Message />
          <Message />
          <Message />
        </ul>
        <ChatSendBar />
      </DragedMessageContext.Provider>
    </div>
  )
}

export default Chat