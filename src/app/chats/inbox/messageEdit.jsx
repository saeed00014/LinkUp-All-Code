import { ChatMessageContext } from "@/context/context"
import { useContext } from "react"
import { AiFillEdit } from "react-icons/ai"

const MessageEdit = () => {
  const { setEditMessage, chooseMessage } = useContext(ChatMessageContext)
  
  const handleEdit = () => {
    setEditMessage(chooseMessage)
  }

  return (
    <span
    onClick={handleEdit}
      className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
    >
      <AiFillEdit />
    </span>
  )
}
export default MessageEdit