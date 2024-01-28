import { useContext } from "react"
import { ChatContext } from "@/context/context"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import Link from "next/link"

const ChatsUser = ({targetUser, chat}) => {
  const { setCurrentChat } = useContext(ChatContext)
  const handleClick = () => {
    setCurrentChat({
      targetUser: targetUser, 
      chat_id: chat.id
    })
  }
  return (
    <Link 
      href={`/chats/inbox?chat_id=${chat.id}&targetUser_id=${targetUser.id}`}
      onClick={handleClick}
      className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
    >
      <span className="relative w-12 min-w-12 h-12">
        <Image 
          fill={true}
          src={targetUser.image || defaultImage}
          alt="profile picture"
          className="rounded-full"
        />
      </span>
      <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
        <div className="flex gap-2">
          <span>
            {targetUser.firstname}
          </span>
          <span>|</span>
          <span>
            {targetUser.username}
          </span>
        </div>
        <span>
          {chat.lastMessage}
        </span>
      </div>
    </Link>
  )
}

export default ChatsUser