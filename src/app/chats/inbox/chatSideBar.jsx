"use client"
import { useContext } from "react"
import Link from "next/link"
import ChatSideBarChatRoomsList from "./chatSideBarChatRoomsList"
import { ChatContext } from "@/context/context"
import { chatData } from "@/assets/data/data"
import { IoClose } from "react-icons/io5"
import { FaTrash } from "react-icons/fa"
import { useMutation } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"

const ChatSideBar = () => {
  const { chats, setChats, setCurrentChat, setIsEditChatActive, isEditchatActive, choosedChatRoom } = useContext(ChatContext)

  const deleteChat = useMutation({
    mutationFn: () => {
      baseURL.delete(`/chat/${choosedChatRoom.chat_id}`)
        .then(res => {
          const newChats = chats.filter((chat) => chat.id != choosedChatRoom.chat_id)
          if(!newChats[0]) {
            setIsEditChatActive(false)
          }
          setChats(newChats)
        })
        .catch(err => {
          console.log(err)
        })
    }
  })
  
  const handleDeleteChat = () => {
    choosedChatRoom && deleteChat.mutate()
  }

  const handleClick = () => {
    setCurrentChat("")
  }

  return (
    <div className="relative flex flex-col w-[300px] min-w-[300px] border-l border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 ">
      <div className="flex items-center justify-between w-full px-4 h-[57.5px] border-b border-b-gray-500">
        <Link 
          href={"/chats/inbox"}
          onClick={handleClick}
          className="cursor-pointer"
        >
          {chatData.newChat}
        </Link>
        {isEditchatActive ?
          <div className="flex items-center gap-3">
            <button
              onClick={handleDeleteChat}
              className='relative flex p-[.85rem] text-[1rem] rounded-full hover:bg-gray-200 dark:hover:bg-gray-600'
            >
              <FaTrash />
            </button>
            <button 
              onClick={() => setIsEditChatActive(false)} 
              className='relative flex p-[.5rem] text-[1.7rem] rounded-full hover:bg-gray-200 dark:hover:bg-gray-600'
            >
              <IoClose />
            </button>
          </div> 
        :       
          <span
            onClick={() => setIsEditChatActive(true)}
            className="cursor-pointer"
          >
            {chatData.editChat}
          </span>
        }
      </div>
      <ChatSideBarChatRoomsList />
    </div>
  )
}

export default ChatSideBar