import { ChatMessageContext } from "@/context/context"
import { useContext } from "react"
import { FaArrowTurnUp } from "react-icons/fa6"

const MessageShare = () => {
  const { chooseMessage, setShareMessage, setChooseMessage } = useContext(ChatMessageContext)

  const handleShare = () => {
    setShareMessage({text: chooseMessage.text, id: chooseMessage.id})
    setChooseMessage("")
  } 

  return (
    <span 
      onClick={handleShare}
      className="-rotate-90 p-3 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
    >
      <FaArrowTurnUp />
    </span>
  )
}

export default MessageShare