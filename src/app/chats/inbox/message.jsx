"use client"
import { useContext, useEffect, useState } from "react"
import { ChatContext } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"
import defaultImage from "@/assets/images/default.jpg"
import Image from "next/image"
import MessageDelete from "./messageDelete"
import MessageEdit from "./messageEdit"
import MessageShare from "./messageShare"

const Message = ({message}) => {
  const { currentChat } = useContext(ChatContext)
  const { targetUser, chat_id } = currentChat
  const [ isClicked, setIsClicked ] = useState(false)

  useEffect(() => {
    const scrollToBottom = () => {
      const element = document.getElementById("chatMessageList")
      element && (element.scrollTop = element.scrollHeight)
    }
    scrollToBottom()
  }, [])

  const messageUser = useQuery({
    queryKey: [`messageUser${message.user_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/comment/user?user_id=${message.user_id}`)
      return response
    }
  })
  if(!messageUser.isPending) {
    const user = messageUser.data.data.response
    return (
      <li
        onClick={() => setIsClicked(!isClicked)}
        className={`flex items-end ${targetUser.id != message.user_id ? "flex-row-reverse justify-start text-red-500" : "justify-start" } w-full gap-2`}>
        <span className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image 
            fill={true}
            src={user.image || defaultImage}
            alt="profile picture"
          />
        </span>
        <div className={`flex flex-col w-full ${targetUser.id != message.user_id ? "items-end" : "items-start"}`}>
          <span className="text-[.7rem]">
            {user.firstname}
          </span>
          <div className={`flex ${targetUser.id != message.user_id ? "flex-row-reverse rounded-l-[.5rem]" : "flex-row rounded-r-[.5rem]"} justify-start w-full ${isClicked ? "bg-gray-700" : ""}  gap-2`}>
            <div className={`relative flex ${targetUser.id != message.user_id ? "justify-end" : "justify-start"} w-fit`}>
              <span className="flex py-2 px-3 w-fit max-w-[20rem] text-[.8rem] rounded-[.5rem] bg-gray-200 dark:bg-gray-800 z-20">
                {message.text}
              </span>
            </div>
            {isClicked && 
              <div className="flex items-center text-[1.3rem] gap-4">
                <MessageDelete />
                <MessageEdit />
                <MessageShare />
              </div>
            }
          </div>
        </div>
      </li>
    )
  }
}

export default Message