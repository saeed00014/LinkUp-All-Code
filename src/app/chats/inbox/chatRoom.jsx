"use client"
import { useContext } from "react"
import { ChatContext } from "../../../context/context"
import ChatRoomBody from "./chatRoomBody"
import ChatRoomUserSearch from "./chatRoomUserSearch"

const ChatRoom = () => {
  const { currentChat } = useContext(ChatContext)
  const { targetUser } = currentChat

  return (
    <>
      {targetUser ? 
        <ChatRoomBody />
      : 
        <ChatRoomUserSearch />
      }
    </>
  )
}

export default ChatRoom