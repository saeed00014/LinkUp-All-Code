"use client"
import { useContext, useEffect, useState } from "react"
import { ChatContext, ChatMessageContext } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"
import defaultImage from "@/assets/images/default.jpg"
import Image from "next/image"
import MessageDelete from "./messageDelete"
import MessageEdit from "./messageEdit"
import MessageShare from "./messageShare"
import Post from "@/components/post/post"

const Message = ({message}) => {
  const { currentChat } = useContext(ChatContext)
  const { chooseMessage, setChooseMessage } = useContext(ChatMessageContext)
  const { targetUser, chat_id } = currentChat
  const [ isClicked, setIsClicked ] = useState(false)

  useEffect(() => {
    const scrollToBottom = () => {
      const element = document.getElementById("chatMessageList")
      element && (element.scrollTop = element.scrollHeight)
    }
    scrollToBottom()
  }, [])

  const getMessageUser = useQuery({
    queryKey: [`messageUser${message.user_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/comment/user?user_id=${message.user_id}`)
      if(response.data.response) {
        return response
      }
    }
  })

  const getSentPostInfo = useQuery({
    queryKey: [`postInfo${message.id}`],
    queryFn: async () => {
      const post = message.post_id && await baseURL.get(`/post/${message.post_id}`)
      return post
    }
  })

  const handleClick = () => {
    // document.getElementById(`${message.attachedMessage_id}`).click()
    !isClicked && setChooseMessage(oldMessages => [...oldMessages, message])
    isClicked && setChooseMessage(oldMessages => oldMessages.filter((oldMessage) => oldMessage.id != message.id))
    setIsClicked(!isClicked)
  }

  if(!getMessageUser.isPending && !getSentPostInfo.isPending) {
    const user = getMessageUser.data.data.response
    const post = message.post_id ? getSentPostInfo.data.data.response : null

    return (
      <li
        onClick={handleClick}
        className={`flex items-end ${targetUser.id != message.user_id ? "flex-row-reverse justify-start text-red-500" : "justify-start" } w-full gap-2`}
      >
        <span className="relative min-w-10 min-h-10 rounded-full overflow-hidden">
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
            <div className={`relative flex flex-col ${targetUser.id != message.user_id ? "justify-end " : "justify-start"} w-fit`}>
              {message.attachedMessage && 
                <div
                  className="flex py-2 pl-3 pr-1 w-full max-w-[20rem] text-[.8rem] rounded-t-[.5rem] bg-gray-200 dark:bg-gray-700/75 hover:bg-gray-700 gap-1 z-20 cursor-pointer"
                >
                  <span className="flex min-w-[.12rem] max-w-[.12rem] w-[.12rem] h-[20px] rounded-full bg-white"></span>
                  <span className="flex items-center text-[.7rem]">  
                    {message.attachedMessage}
                  </span>
                </div>
              }
              {message.text && 
                <span
                  id={message.id} 
                  className={`flex justify-end py-2 px-3 w-full max-w-[20rem] text-[.8rem] ${message.attachedMessage ? "rounded-b-[.5rem]" : "rounded-[.5rem]"} bg-gray-200 dark:bg-gray-800 z-20`}
                >
                  {message.text}
                </span>
              }
              {message.post_id ? 
                <Post 
                  post={post[0]} 
                  miniEdition={true} 
                /> : null
              }
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default Message