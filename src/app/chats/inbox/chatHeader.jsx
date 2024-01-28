"use client"
import { useContext } from "react"
import { ChatMessageContext } from "@/context/context"
import Link from "next/link"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import MessageDelete from "./messageDelete"
import MessageEdit from "./messageEdit"
import MessageShare from "./messageShare"
 
const ChatHeader = ({targetUser}) => {
  const { chooseMessage } = useContext(ChatMessageContext)
  return (
    <header className="flex w-full justify-between px-2 py-2 border-b h-[57.59px] border-b-gray-400 dark:border-b-gray-500 bg-white dark:bg-gray-800">
      <Link 
        href={`/profile/${targetUser.id}`}
        className="flex gap-2"
      >
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
      </Link>
        {chooseMessage && 
          <div className="flex items-center text-[1.3rem] gap-4">
            {chooseMessage.length < 2 && 
              <MessageDelete 
                message={chooseMessage[0]} 
              />
            }
            {chooseMessage.length < 2 && 
              <MessageEdit
                message={chooseMessage[0]}
              />
            }
            {chooseMessage.length < 2 && 
              <MessageShare 
                message={chooseMessage[0]}
              />
            }
          </div>
        }
    </header>
  )
}

export default ChatHeader