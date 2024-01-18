"use client"
import { useContext } from "react"
import { ChatContext } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import ChatsUser from "./chatsUser"
import { baseURL } from "@/axios/axios"

const ChatsUsersCon = () => {
  const { chats } = useContext(ChatContext)

  return (
    <ul className="flex flex-col w-full mt-[4rem] !overflow-y-scroll">
      {chats && 
        chats.map((chat) => {
          const targetUser_id = (chat.userOne == chat.loginUser_id) ? chat.userTwo : chat.userOne
          const { isPending, error, data } = useQuery({
            queryKey: ["profileUser"],
            queryFn: async () => {
              const user = await baseURL.get(`/user/${targetUser_id}`)
              return user
            }
          })
          if(!isPending && chat.id) {
            const targetUser = data.data.response
            return (
              <div key={targetUser_id}>
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