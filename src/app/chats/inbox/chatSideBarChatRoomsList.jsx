"use client"
import { useContext } from "react"
import { ChatContext } from "@/context/context"
import ChatSideBarChatRooms from "./chatSideBarChatRooms"

const ChatSideBarChatRoomsList = () => {
  const { chats } = useContext(ChatContext)

  return (
    <ul className="flex flex-col w-full !overflow-y-scroll">
      {chats?.map((chat) => {
        return (
          <div 
            key={chat.id}
          >
            <ChatSideBarChatRooms
              chat={chat}
            />
          </div>
        )
      })}
    </ul>
  )
}

export default ChatSideBarChatRoomsList