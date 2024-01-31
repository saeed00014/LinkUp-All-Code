"use client"
import ChatsUsers from "./chatsUsersCon"
import ChatSearch from "./chatSearch"

const ChatsSideBar = () => {

  return (
    <div className="relative flex flex-col w-[300px] min-w-[300px] border-l border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 ">
      <div>
        
      </div>
      <ChatsUsers />
    </div>
  )
}

export default ChatsSideBar