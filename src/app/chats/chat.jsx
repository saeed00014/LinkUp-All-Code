"use client"
import { useContext, useState } from "react"
import { ChatContext } from "../../context/context"
import ChatBody from "./chatBody"

const Chat = () => {
  const { currentChat } = useContext(ChatContext)
  const { targetUser, chat } = currentChat

  return (
    <>
      {targetUser ? 
        <ChatBody />
        : <div>dfjklsfldjksdfklsj</div>
      }

    </>
  )
}

export default Chat