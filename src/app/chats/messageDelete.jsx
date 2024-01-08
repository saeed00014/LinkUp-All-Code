import { DragedMessageContext } from "@/context/context"
import { useContext } from "react"
import { FaTrash } from "react-icons/fa"

const MessageDelete = () => {
  const { dragedMessage } = useContext(DragedMessageContext)
  const handleDelete = () => {

  }

  return (
    <span
      onClick={handleDelete}
      className="hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <FaTrash />
    </span>
  )
}

export default MessageDelete