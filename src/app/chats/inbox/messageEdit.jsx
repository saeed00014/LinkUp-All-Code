import { ChatMessageContext } from "@/context/context"
import { useContext } from "react"
import { AiFillEdit } from "react-icons/ai"

const MessageEdit = ({message}) => {
  const { setEditMessage } = useContext(ChatMessageContext)
  
  const handleEdit = () => {
    setEditMessage(message)
  }

  return (
    <span
    onClick={handleEdit}
      className="hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <AiFillEdit />
    </span>
  )
}
export default MessageEdit