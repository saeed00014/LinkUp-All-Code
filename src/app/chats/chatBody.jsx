"use client"
import { useContext, useEffect, useState } from "react"
import { ChatContext, DragedMessageContext } from "@/context/context"
import { io } from 'socket.io-client'
import ChatHeader from "./chatHeader"
import Message from "./message"
import ChatsSendBar from "./chatsSendBar"

const ChatBody = () => {
  const { currentChat, setMessages, messages } = useContext(ChatContext)
  const { targetUser, chat } = currentChat
  const [dragedMessage, setDragedMessage] = useState([])
  const [sendMessage, setSendMessage] = useState("")

  useEffect(() => {
    const socket = io({path: "/api/socket"})

    socket.emit('join', {chat_id: chat.id})
    sendMessage && socket.emit('newMessage', {message: sendMessage})

    socket.on('serverMessage', (message) => {
      messages.push(message)
      console.log(messages)

    })

    return () => {
      socket.disconnect()
    }
  }, [sendMessage])

  return (
    <div className="relative flex flex-col justify-between w-full h-auto bg-gray-200 dark:bg-gray-950">
      <DragedMessageContext.Provider 
        value={{ 
            dragedMessage, 
            setDragedMessage
        }}
      >
        <ChatHeader 
          targetUser={targetUser}
        />
        <ul className="relative flex flex-col w-full h-full justify-start items-start py-2 px-2 gap-1 overflow-y-scroll">
          {messages != [] && 
            messages.map((message) => {
              return (
                <div className="w-full">
                  <Message message={message} />
                </div>
              )
            })
          }
        </ul>
        <ChatsSendBar 
          setSendMessage={setSendMessage}
        />
      </DragedMessageContext.Provider>
    </div>
  )
}

export default ChatBody