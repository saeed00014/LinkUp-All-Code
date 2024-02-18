import { useMutation } from "@tanstack/react-query"
import { FaTrash } from "react-icons/fa"
import { baseURL } from "@/axios/axios"

const MessageDelete = ({ setMessages, setChooseMessage, chooseMessage, edition }) => {
  const url = (edition == "message") ?
    `/message/${chooseMessage.id}`
    : `/comment/${chooseMessage.id}`

  const deleteMessage = useMutation({
    mutationFn: async () => {
      const response = await baseURL.delete(url)
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
      className={`${edition == "message" ? "p-4" : "px-3 py-2"} text-[.94rem] hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer`}
    >
      <FaTrash />
    </span>
  )
}

export default MessageDelete