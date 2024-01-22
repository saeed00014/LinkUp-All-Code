"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { ChatContext } from "@/context/context"
import { baseURL } from "@/axios/axios"
import { useSearchParams } from 'next/navigation'

const Context = ({children}) => {
  const searchParams = useSearchParams()
  const chat_id = searchParams.get('chat_id')
  const targetUser_id = searchParams.get('targetUser_id')
  const [currentChat, setCurrentChat] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [lastMessage, setLastMessage] = useState("")
  const localUser = localStorage.getItem("user")
  const loginUser = localUser && JSON.parse(localUser)
  const {isPending, error, data} = useQuery({
    queryKey: ["chat"],
    queryFn: async () => {
      const response = await baseURL.get("/chat")
      return response
    }
  })

  if(chat_id && targetUser_id) {
    const response = useQuery({
      queryKey: ["profileUser"],
      queryFn: async () => {
        const user = await baseURL.get(`/user/${targetUser_id}`)
        const targetUser = user.data.response
        setCurrentChat({targetUser: targetUser, chat_id: chat_id})
        return user
      }
    })
  }

  if(!isPending && ((chat_id && currentChat) || !chat_id)) {
    const chats = data.data.response
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