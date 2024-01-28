import { baseURL } from "@/axios/axios"
import { ChatMessageContext } from "@/context/context"
import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import { FaTrash } from "react-icons/fa"

const MessageDelete = ({message}) => {
  const { setMessages, setChooseMessage } = useContext(ChatMessageContext)
  const deleteMessage = useMutation({
    mutationFn: async () => {
      const response = await baseURL.delete(`/message/${message.id}`)
      return response
    }
  })
  
  const handleDelete = () => {
    deleteMessage.mutate()
    setMessages(oldMessages => 
      oldMessages.filter((oldMessage) => oldMessage.id != message.id)
    )
    setChooseMessage("")
  }

  return (
    <span
      onClick={handleDelete}
      className="text-[1rem] hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
    >
      <FaTrash />
    </span>
  )
}

export default MessageDelete