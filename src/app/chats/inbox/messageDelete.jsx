import { baseURL } from "@/axios/axios"
import { ChatMessageContext } from "@/context/context"
import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import { FaTrash } from "react-icons/fa"

const MessageDelete = () => {
  const { setMessages, setChooseMessage, chooseMessage } = useContext(ChatMessageContext)
  const deleteMessage = useMutation({
    mutationFn: async () => {
      const response = await baseURL.delete(`/message/${message.id}`)
      return response
    }
  })
  
  const handleDelete = () => {
    deleteMessage.mutate()
    setMessages(oldMessages => 
      oldMessages.filter((oldMessage) => oldMessage.id != chooseMessage.id)
    )
    setChooseMessage("")
  }

  return (
    <span
      onClick={handleDelete}
      className="p-4 text-[.94rem] hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer "
    >
      <FaTrash />
    </span>
  )
}

export default MessageDelete