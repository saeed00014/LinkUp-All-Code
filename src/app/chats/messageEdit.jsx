import { DragedMessageContext } from "@/context/context"
import { useContext } from "react"
import { AiFillEdit } from "react-icons/ai"

const MessageEdit = () => {
  const { setEditMessage } = useContext(DragedMessageContext)
  const handleEdit = () => {
    () => setEditMessage({id: "432", message: "fdsfds"})
  }

  return (
    <span
      onClick={handleEdit}
      className="text-[1.5rem] hover:bg-gray-200 dark:hover:bg-gray-700">
      <AiFillEdit />
    </span>
  )
}

export default MessageEdit