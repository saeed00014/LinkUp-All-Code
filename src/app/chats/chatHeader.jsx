"use client"
import { useContext } from "react"
import { DragedMessageContext } from "../../context/context"
import MessageDelete from "./messageDelete"
import MessageShare from "./messageShare"
import MessageEdit from "./messageEdit"
import { messages } from "@/assets/data/data"
import Image from "next/image"
import profile from "@/assets/images/profile.jpg"
 
const ChatHeader = () => {
  const {dragedMessage, editMessage} = useContext(DragedMessageContext)

  return (
    <header className="flex w-full justify-between px-2 py-2 border-b border-b-gray-400 dark:border-b-gray-500 bg-white dark:bg-gray-800">
      <div className="flex gap-2">
        <span className="relative flex h-12 w-12">
          <Image
            src={profile}
            alt=""
            className="rounded-full"        
          />
        </span>
        <div className="flex flex-col justify-around text-[.9rem]">
          <span>{messages.name}</span>
          <span>{messages.id}</span>
        </div>
      </div>
      {dragedMessage && dragedMessage.length > 0 && !editMessage &&
        <div className="flex items-center justify-center h-full gap-3 [&>span]:flex [&>span]:items-center [&>span]:justify-center [&>span]:h-[3rem] [&>span]:w-[3rem] [&>span]:cursor-pointer [&>span]:rounded-[.3rem]">
          <MessageDelete />
          {dragedMessage.length < 2 && !editMessage && 
            <MessageEdit />
          }
          {!editMessage &&
            <MessageShare />
          }
        </div>
      }
    </header>
  )
}

export default ChatHeader