"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { ChatContext } from "@/context/context"
import { baseURL } from "@/axios/axios"

const Context = ({children}) => {
  const [currentChat, serCurrentChat] = useState("")
  const [messages, setMessages] = useState([])
  const localUser = localStorage.getItem("user")
  const loginUser = localUser && JSON.parse(localUser)
  const {isPending, error, data} = useQuery({
    queryKey: ["chat"],
    queryFn: async () => {
      const response = await baseURL.get("/chat")
      return response
    }
  })

  if(!isPending) {
    const chats = data.data.response
    return (
      <ChatContext.Provider 
        value={{
          loginUser,
          chats,
          serCurrentChat,
          currentChat,
          messages,
          setMessages
        }}
      >
        {children}
      </ChatContext.Provider>
    )
  }
}

export default Context