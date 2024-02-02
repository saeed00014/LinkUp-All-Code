"use client"
import { useContext } from "react"
import Link from "next/link"
import ChatSideBarChatRoomsList from "./chatSideBarChatRoomsList"
import { ChatContext } from "@/context/context"

const ChatSideBar = () => {
  const { setCurrentChat } = useContext(ChatContext)
  const handleClick = () => {
    setCurrentChat("")
  }
  return (
    <div className="relative flex flex-col w-[300px] min-w-[300px] border-l border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 ">
      <div className="flex items-center justify-between w-full px-4 h-[57.5px] border-b border-b-gray-500">
        <span className="cursor-pointer">delete chat</span>
        <Link 
          href={"/chats/inbox"}
          onClick={handleClick}
          className="cursor-pointer"
        >
          new chat
        </Link>
      </div>
      <ChatSideBarChatRoomsList />
    </div>
  )
}

export default ChatSideBar