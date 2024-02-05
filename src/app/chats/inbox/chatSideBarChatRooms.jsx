import { useContext } from "react"
import { ChatContext } from "@/context/context"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"

const ChatSideBarChatRooms = ({chat}) => {
  const { setCurrentChat, isEditchatActive, setChoosedChatRoom, choosedChatRoom } = useContext(ChatContext)
  const router = useRouter()

  const getChatUserInfo = useQuery({
    queryKey: [`chatUser${chat.id}`],
    queryFn: async () => {
      const user = await baseURL.get(`/chat/user?userOne=${chat.userOne}&userTwo=${chat.userTwo}`)
      return user
    }
  })

  const handleClick = (targetUser) => {
    if(!isEditchatActive) {
      router.push(
        `/chats/inbox?chat_id=${chat.id}&targetUser_id=${targetUser.id}`
      )
      setCurrentChat({
        targetUser: targetUser, 
        chat_id: chat.id
      })
    }
    if(isEditchatActive) {
      setChoosedChatRoom({
        chat_id: chat.id
      })
    }
  }

  if(!getChatUserInfo.isPending) {
    const targetUser = getChatUserInfo.data.data.response
    return (
      <div 
        onClick={() => handleClick(targetUser)}
        className="flex w-full items-center min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
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
        {isEditchatActive && 
          <span className={`absolute left-5 flex w-[2rem] h-[2rem] ${choosedChatRoom?.chat_id == chat.id ? "bg-gray-300 dark:bg-gray-500" : ""}  rounded-full border-2 dark:border-gray-500 border-gray-300`}></span>
        }
      </div >
    )
  
  }
}

export default ChatSideBarChatRooms