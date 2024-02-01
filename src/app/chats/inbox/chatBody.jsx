"use client"
import { useContext, useEffect, useState } from "react"
import { ChatContext, ChatMessageContext } from "@/context/context"
import { useMutation, useQuery } from "@tanstack/react-query"
import Link from "next/link"
import LoadingSpin from "@/components/loadingSpin"
import ChatHeader from "./chatHeader"
import Message from "./message"
import ChatsSendBar from "./chatsSendBar"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import { baseURL } from "@/axios/axios"
import { io } from 'socket.io-client'
import { chatData } from "@/assets/data/data"

const ChatBody = () => {
  const { currentChat } = useContext(ChatContext)
  const { targetUser, chat_id } = currentChat
  const [sendMessage, setSendMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [editMessage, setEditMessage] = useState("")
  const [shareMessage, setShareMessage] = useState("")
  const [chooseMessage, setChooseMessage] = useState("")

  const getCurrentChatMessages = useQuery({
    queryKey: [`messages${chat_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/message?chat_id=${chat_id}`)
      setMessages(response.data.response)
      return response
    }
  })

  const postNewMessage = useMutation({
    mutationFn: async ({sendMessage}) => {
      const response = await baseURL.post(`/message?chat_id=${chat_id}&user_id=${sendMessage.user_id}`,{
        text: sendMessage.text, 
        image: sendMessage.image, 
        post_id: sendMessage.post_id, 
        attachedMessage_id: sendMessage.attachedMessage 
          ? sendMessage.attachedMessage_id : "",
        attachedMessage: sendMessage.attachedMessage 
          ? sendMessage.attachedMessage : ""
      })
      const socket = io({path: "/api/socket"})
      if(response.data) {
        socket.emit('newMessage', { message: {...sendMessage, id: response.data.response} })
      }
      return response.data.response
    }
  })

  useEffect(() => {
    const socket = io({path: "/api/socket"})
    socket.emit('join', {chat_id: chat_id})
    if(sendMessage.text || sendMessage.image || sendMessage.post_id) {
      postNewMessage.mutate({sendMessage})
    }
    socket.on('serverMessage', (message) => {
      setMessages(messages => [...messages, message])
    })
    return () => {
      socket.disconnect()
    }
  }, [sendMessage])

  return (
    <div className="relative flex flex-col justify-between w-full h-auto bg-gray-200 dark:bg-gray-950">
      <ChatMessageContext.Provider 
        value={{ 
          messages,
          setMessages,
          editMessage,
          setEditMessage,
          shareMessage,
          setShareMessage,
          chooseMessage,
          setChooseMessage
        }}
      >
        <ChatHeader 
          targetUser={targetUser}
        />
        {!getCurrentChatMessages.isPending ? 
          <ul 
            id="chatMessageList"
            className="relative flex flex-col-reverse w-full h-full justify-start items-start py-2 px-2 gap-1 !overflow-y-auto"
          >
            <div className="flex-col-revers w-full h-full">
              {messages[0] ? 
                messages.map((message) => {
                  return (
                    <div 
                      key={message.id} 
                      className="w-full"
                    >
                      <Message message={message} />
                    </div>
                  )
                })
              : 
                <div className="flex flex-col items-center justify-center w-full h-full gap-1">
                  <span className="relative flex h-24 w-24">
                    <Image
                      src={targetUser.image || defaultImage}
                      alt="profile picture"
                      width={100}
                      height={100}
                      className="rounded-full"        
                    />
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="pb-[.3rem]">
                      {targetUser.firstname}
                    </span>
                    <span>|</span>
                    <span>
                      {targetUser.username}
                    </span>
                  </div>
                  <Link
                    href={`/profile/${targetUser.id}`}
                    className="px-4 py-2 rounded-[.5rem] bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                  >
                    {chatData.viewProfile}
                  </Link>
                </div>
              }
            </div>
          </ul> 
          : 
          <div className="flex items-center justify-center w-full h-full">
            <LoadingSpin />
          </div>
        }
        <ChatsSendBar 
          setSendMessage={setSendMessage}
        />
      </ChatMessageContext.Provider>
    </div>
  )
}

export default ChatBody