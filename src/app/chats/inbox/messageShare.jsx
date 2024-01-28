import { ChatMessageContext } from "@/context/context"
import { useContext } from "react"
import { FaArrowTurnUp } from "react-icons/fa6"

const MessageShare = ({message}) => {
  const { shareMessage, setShareMessage } = useContext(ChatMessageContext)

  const handleShare = () => {
    setShareMessage({text: message.text, id: message.id})
  } 

  return (
    <span 
      onClick={handleShare}
      className="-rotate-90 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <FaArrowTurnUp />
    </span>
  )
}

export default MessageShare