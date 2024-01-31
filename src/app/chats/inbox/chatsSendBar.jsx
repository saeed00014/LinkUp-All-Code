"use client"
import { useContext, useState } from "react"
import { ChatContext, ChatMessageContext } from "@/context/context"
import { IoSend } from "react-icons/io5"
import { IoClose } from "react-icons/io5"
import { messages } from "@/assets/data/data"

const ChatsSendBar = ({setSendMessage}) => {
  const { currentChat, loginUser } = useContext(ChatContext)
  const { editMessage, setEditMessage, shareMessage, setShareMessage } = useContext(ChatMessageContext)
  const { targetUser, chat_id } = currentChat
  const [ message, setMessage ] = useState("")

  const handlePostMessage = (e) => {
    e.preventDefault()
    setSendMessage({
      text: message, 
      image: "", 
      post_id: shareMessage.post_id, 
      user_id: loginUser.id,
      attachedMessage: shareMessage.text,
      attachedMessage_id: shareMessage.id
    })
    setMessage("")
    setShareMessage("")
  }

  const handleEditMessage = (e) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={editMessage ? 
        (e) => handleEditMessage(e) : 
        (e) => handlePostMessage(e)
      }
      className="relative flex flex-col items-center w-full"
    >
      <label 
        htmlFor="chatsSubmit"
        className="absolute left-0 bottom-[0] flex items-center justify-center w-[3rem] h-[52px] text-[1.2rem] rotate-180 cursor-pointer"
      >
        <IoSend />
        <input 
          type="submit" 
          id="chatsSubmit"
          className="invisible w-0 h-0"
        />
      </label>
      {shareMessage && 
        <div className="flex justify-between items-center w-full h-[3rem] pr-2 bg-gray-700/25">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[38px] w-[.15rem] rounded-full bg-white"></span>
            <span>
              {shareMessage.text}
            </span>
          </div>
          <span 
            onClick={() => setShareMessage("")}
            className="flex justify-center w-[48px] text-2xl"
          >
            <IoClose />
          </span>
        </div>
      }
      <input
        type="text" 
        name="text"
        id="chatsSendBar"
        placeholder={messages.enterMessage}
        value={!editMessage ? message : editMessage.text}
        onChange={!editMessage ? (e) => setMessage(e.target.value) : (e) => setEditMessage(e.target.value)} 
        className="w-full px-2 pt-3 pb-4 bg-white dark:bg-gray-800" 
      />
    </form>
  )
}

export default ChatsSendBar