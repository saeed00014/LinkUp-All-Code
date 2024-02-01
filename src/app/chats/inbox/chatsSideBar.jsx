"use client"
import ChatsUsers from "./chatsUsersCon"

const ChatsSideBar = () => {
  return (
    <div className="relative flex flex-col w-[300px] min-w-[300px] border-l border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 ">
      <div className="flex items-center justify-between w-full px-4 h-[57.5px] border-b border-b-gray-500">
        <span className="cursor-pointer">delete chat</span>
        <span className="cursor-pointer">new chat</span>
      </div>
      <ChatsUsers />
    </div>
  )
}

export default ChatsSideBar