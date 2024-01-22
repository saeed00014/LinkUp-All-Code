"use client"
import { useContext, useEffect, useState } from "react"
import { ChatContext, DragedMessageContext } from "@/context/context"
import { useMutation, useQuery } from "@tanstack/react-query"
import ChatHeader from "./chatHeader"
import Message from "./message"
import ChatsSendBar from "./chatsSendBar"
import { baseURL } from "@/axios/axios"
import { io } from 'socket.io-client'

const ChatBody = () => {
  const { currentChat } = useContext(ChatContext)
  const { targetUser, chat_id } = currentChat
  const [dragedMessage, setDragedMessage] = useState([])
  const [sendMessage, setSendMessage] = useState("")
  const [messages, setMessages] = useState([])

  const {isPending, error, data} = useQuery({
    queryKey: [`messages${chat_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/message?chat_id=${chat_id}`)
      setMessages(response.data.response)
    }
  })

  const postNewMessage = useMutation({
    mutationFn: async ({sendMessage}) => {
      const response = await baseURL.post(`/message?chat_id=${chat_id}&user_id=${sendMessage.user_id}`,{text: sendMessage.text, image: sendMessage.image, post_id: sendMessage.post_id})
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
      <DragedMessageContext.Provider 
        value={{ 
            dragedMessage, 
            setDragedMessage
        }}
      >
        <ChatHeader 
          targetUser={targetUser}
        />
        {!isPending && 
          <ul 
            id="chatMessageList"
            className="relative flex flex-col-reverse w-full h-full justify-start items-start py-2 px-2 gap-1 overflow-y-auto"
          >
            <div className="flex-col w-full">
              {!isPending && messages != [] && 
                messages.map((message) => {
                  return (
                    <div className="w-full">
                      <Message message={message} />
                    </div>
                  )
                })
              }
            </div>
          </ul>
        }
        <ChatsSendBar 
          setSendMessage={setSendMessage}
        />
      </DragedMessageContext.Provider>
    </div>
  )
}

export default ChatBody