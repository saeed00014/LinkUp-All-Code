"use client"
import { useContext } from "react"
import { ChatContext } from "../../../context/context"
import ChatBody from "./chatBody"
import ChatUserSearch from "./chatUserSearch"

const Chat = () => {
  const { currentChat } = useContext(ChatContext)
  const { targetUser } = currentChat

  return (
    <>
      {targetUser ? 
        <ChatBody />
      : 
        <ChatUserSearch />
      }
    </>
  )
}

export default Chat