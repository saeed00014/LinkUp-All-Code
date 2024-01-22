"use client"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
 
const ChatHeader = ({targetUser}) => {

  return (
    <header className="flex w-full justify-between px-2 py-2 border-b h-[57.59px] border-b-gray-400 dark:border-b-gray-500 bg-white dark:bg-gray-800">
      <div className="flex gap-2">
        <span className="relative flex h-10 w-10">
          <Image
            src={targetUser.image || defaultImage}
            alt=""
            width={60}
            height={60}
            className="rounded-full"        
          />
        </span>
        <div className="flex flex-col justify-around text-[.9rem]">
          <span>{targetUser.firstname}</span>
          <span>{targetUser.username}</span>
        </div>
      </div>
    </header>
  )
}

export default ChatHeader