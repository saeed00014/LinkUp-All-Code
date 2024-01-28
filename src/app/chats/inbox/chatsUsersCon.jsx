"use client"
import { useContext } from "react"
import { ChatContext } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import ChatsUser from "./chatsUser"
import { baseURL } from "@/axios/axios"

const ChatsUsersCon = () => {
  const { chats } = useContext(ChatContext)

  return (
    <ul className="flex flex-col w-full !overflow-y-scroll">
      {chats && chats.map((chat) => {
        const getChatUserInfo = useQuery({
          queryKey: [`chatUser${chat.id}`],
          queryFn: async () => {
            const user = await baseURL.get(`/chat/user?userOne=${chat.userOne}&userTwo=${chat.userTwo}`)
            return user
          }
        })
        if(!getChatUserInfo.isPending && chat.id) {
          const targetUser = getChatUserInfo.data.data.response
          return (
            <div key={chat.id}>
              <ChatsUser
                targetUser={targetUser}
                chat={chat}
              />
            </div>
          )
        }
      })}
    </ul>
  )
}

export default ChatsUsersCon