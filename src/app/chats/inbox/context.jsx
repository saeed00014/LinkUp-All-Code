"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { ChatContext } from "@/context/context"
import { baseURL } from "@/axios/axios"
import { useSearchParams } from 'next/navigation'
import LoadingSpin from "@/components/loadingSpin"

const Context = ({children}) => {
  const searchParams = useSearchParams()
  const chat_id = searchParams.get('chat_id')
  const targetUser_id = searchParams.get('targetUser_id')
  const [currentChat, setCurrentChat] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [lastMessage, setLastMessage] = useState("")
  const localUser = localStorage.getItem("user")
  const loginUser = localUser && JSON.parse(localUser)

  const getLoginUserChats = useQuery({
    queryKey: ["chat"],
    queryFn: async () => {
      const response = await baseURL.get("/chat")
      return response
    }
  })

  const getCurrentChat = useQuery({
    queryKey: ["profileUser"],
    queryFn: async () => {
      if(chat_id && targetUser_id) {
        const user = await baseURL.get(`/user/${targetUser_id}`)
        const targetUser = user.data.response
        setCurrentChat({targetUser: targetUser, chat_id: chat_id})
        return user
      }
    }
  })

  if(getLoginUserChats.isPending) {
    return (
      <div className="fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center">
        <LoadingSpin />
      </div>
    )
  }

  if(!getLoginUserChats.isPending && ((chat_id && currentChat) || !chat_id)) {
    const chats = getLoginUserChats.data.data.response
    return (
      <ChatContext.Provider 
        value={{
          loginUser,
          chats,
          setCurrentChat,
          currentChat,
          searchResult,
          setSearchResult,
          lastMessage,
          setLastMessage
        }}
      >
        {children}
      </ChatContext.Provider>
    )
  }
}

export default Context