"use client"
import { useContext, useEffect } from "react"
import { ChatContext, ChatMessageContext } from "@/context/context"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import Post from "@/components/post/post"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import { baseURL } from "@/axios/axios"

const Message = ({message}) => {
  const { currentChat, loginUser} = useContext(ChatContext)
  const { chooseMessage, setChooseMessage, messages } = useContext(ChatMessageContext)
  const { targetUser, chat_id } = currentChat
  
  useEffect(() => {
    const scrollToBottom = () => {
      const element = document.getElementById("chatMessageList")
      element && (element.scrollTop = 0)
    }
    scrollToBottom()
  }, [message.id])

  // const getMessageUser = useQuery({
  //   queryKey: [`messageUser${message.user_id}`],
  //   queryFn: async () => {
  //     const response = await baseURL.get(`/comment/user?user_id=${message.user_id}`)
  //     if(response.data.response) {
  //       return response
  //     }
  //   }
  // })

  const getSentPostInfo = useQuery({
    queryKey: [`postInfo${message.id}`],
    queryFn: async () => {
      const post = message.post_id && await baseURL.get(`/post/${message.post_id}`)
      return post
    }
  })

  const handleClick = () => {
    message.id == chooseMessage.id && setChooseMessage("")
    message.id != chooseMessage.id && setChooseMessage(message)
  }

  const handleAttachedMessage = () => {
    const message1 = {id: message.attachedMessage_id, text: message.attachedMessage, post_id: message.post_id}
    const isMessage1Choosed = chooseMessage.id == message1.id
    const isMessage1 = messages.find(
      (message) => message.id == message1.id
    ) 
    !isMessage1 && setChooseMessage("")
    isMessage1 && !isMessage1Choosed && setChooseMessage(message1)
    isMessage1 && isMessage1Choosed && setChooseMessage("")
  }

  if(!getSentPostInfo.isPending) {
    const user = (message.user_id == loginUser.id) ? loginUser : targetUser
    const post = message.post_id ? getSentPostInfo.data.data.response : null
    return (
      <li
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
          <div className={`flex ${targetUser.id != message.user_id ? "flex-row-reverse" : "flex-row"} justify-start w-full ${message.id == chooseMessage.id ? "bg-gray-700" : ""} gap-2`}>
            <div className={`relative flex flex-col ${targetUser.id != message.user_id ? "justify-end " : "justify-start"} w-fit`}>
              {message.attachedMessage && 
                <Link
                  href={`#message${message.attachedMessage_id}`}
                  onClick={handleAttachedMessage}
                  className="flex py-2 pl-3 pr-1 w-full max-w-[20rem] text-[.8rem] rounded-t-[.5rem] bg-gray-200 dark:bg-gray-700/85 hover:bg-gray-700 gap-1 z-20"
                >
                  <span className="flex min-w-[.12rem] max-w-[.12rem] w-[.12rem] h-[20px] rounded-full bg-gray-400"></span>
                  <span className="flex items-center text-[.7rem]">  
                    {message.attachedMessage}
                  </span>
                </Link>
              }
              {message.text && 
                <span
                  onClick={handleClick}
                  id={`message${message.id}`} 
                  className={`flex justify-end py-2 px-3 w-full max-w-[20rem] text-[.8rem] ${message.attachedMessage ? "rounded-b-[.5rem]" : "rounded-[.5rem]"} bg-gray-200 dark:bg-gray-800 z-20`}
                >
                  {message.text}
                </span>
              }
              {(message.post_id && !message.attachedMessage_id) ? 
                <div 
                  id={`message${message.id}`}  
                  onClick={handleClick}
                >
                  <Post 
                    post={post[0]} 
                    miniEdition={true} 
                  /> 
                </div>
                : null
              }
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default Message