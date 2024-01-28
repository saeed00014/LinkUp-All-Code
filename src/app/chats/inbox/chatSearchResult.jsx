"use client"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import { baseURL } from "@/axios/axios"
import { ChatContext } from "@/context/context"
import { useContext } from "react"

const ChatSearchResult = ({user}) => {
  const { setCurrentChat } = useContext(ChatContext)
  const getUserChatId = useQuery({
    queryKey: [`userChat${user.id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/chat/${user.id}`)
      return response
    }
  })

  const handleClick = (chat_id) => {
    setCurrentChat({
      targetUser: user, 
      chat_id: chat_id
    })
  } 

  if(!getUserChatId.isPending) {
    const chat_id = getUserChatId.data.data.chat_id
    return (
    <Link
      href={`/chats/inbox?chat_id=${chat_id}&targetUser_id=${user.id}`}
      onClick={() => handleClick(chat_id)}
      className="group relative flex items-center justify-start w-full cursor-pointer border-b-[1px] dark:border-gray-600 border-gray-400"
    >
      <div className="flex w-full py-2 px-3 gap-2 hover:bg-gray-700">
        <span className="flex justify-center">
          <Image 
            src={user.image || defaultImage}
            width={50}
            height={50}
            alt="user picture"
            className="object-cover w-12 min-w-12 rounded-full"
          />
        </span>
        <div className="flex flex-col justify-center items-start text-[.9rem]">
          <span>
            {user.firstname}
          </span>
          <span>
            {user.username}
          </span>
        </div>
      </div>
    </Link>
  )
  }
}

export default ChatSearchResult