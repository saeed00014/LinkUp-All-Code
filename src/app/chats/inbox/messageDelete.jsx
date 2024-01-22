import { FaTrash } from "react-icons/fa"

const MessageDelete = () => {
  const handleDelete = () => {

  }

  return (
    <span
      onClick={handleDelete}
      className="text-[1rem] hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <FaTrash />
    </span>
  )
}

export default MessageDelete