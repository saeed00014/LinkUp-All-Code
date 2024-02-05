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
  const [chats, setChats] = useState("")
  const [isEditchatActive, setIsEditChatActive] = useState(false)
  const [choosedChatRoom, setChoosedChatRoom] = useState()

  const getLoginUser = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get(`/user/loginUser/userInfo`)
      return response
    }
  })

  const getLoginUserChats = useQuery({
    queryKey: ["chat"],
    queryFn: async () => {
      const response = await baseURL.get("/chat")
      setChats(response.data.response)
      return response
    }
  })

  const getCurrentChat = useQuery({
    queryKey: ["profileUser"],
    queryFn: async () => {
      if(chat_id && targetUser_id) {
        const targetUser = await baseURL.get(`/user/${targetUser_id}`)
        const isChat_idTrue = await baseURL.get(`/chat/check?chat_id=${chat_id}&targetUser_id=${targetUser_id}`)
        if(isChat_idTrue.data.response[0]) {
          const targetUserInfo = targetUser.data.response
          setCurrentChat({targetUser: targetUserInfo, chat_id: chat_id})
        }
        if(!isChat_idTrue.data.response[0]) {
          setCurrentChat({targetUser: "", chat_id: ""})
        }
        return targetUser
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

  if(!getLoginUser.isPending && !getLoginUserChats.isPending && ((chat_id && currentChat) || !chat_id)) {
    const loginUser = getLoginUser.data.data.response
    return (
      <ChatContext.Provider 
        value={{
          loginUser,
          chats,
          setChats,
          setCurrentChat,
          currentChat,
          searchResult,
          setSearchResult,
          lastMessage,
          setLastMessage,
          setIsEditChatActive,
          isEditchatActive,
          setChoosedChatRoom,
          choosedChatRoom
        }}
      >
        {children}
      </ChatContext.Provider>
    )
  }
}

export default Context