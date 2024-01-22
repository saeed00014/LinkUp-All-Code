"use client"
import { useContext } from "react"
import { ChatContext } from "../../../context/context"
import ChatBody from "./chatBody"
import { chatData } from "@/assets/data/data"

const Chat = () => {
  const { currentChat } = useContext(ChatContext)
  const { targetUser, chat_id } = currentChat
  return (
    <>
      {targetUser ? 
        <ChatBody />
        : <div className="flex justify-center items-center w-full h-20">
          {chatData.chooseChat}
        </div>
      }
    </>
  )
}

export default Chat