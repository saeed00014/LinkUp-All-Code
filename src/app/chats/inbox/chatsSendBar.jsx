"use client"
import { useContext, useState } from "react"
import { IoSend } from "react-icons/io5"
import { messages } from "@/assets/data/data"
import { ChatContext } from "@/context/context"

const ChatsSendBar = ({setSendMessage}) => {
  const { currentChat, loginUser } = useContext(ChatContext)
  const { targetUser, chat_id } = currentChat
  const [ message, setMessage ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setSendMessage({text: message, image: "", post_id: "", user_id: loginUser.id})
    setMessage("")
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex items-center w-full">
      <label 
        htmlFor="chatsSubmit"
        className="absolute left-0 flex items-center justify-center w-[3rem] h-full text-[1.2rem] rotate-180 cursor-pointer"
      >
        <IoSend />
        <input 
          type="submit" 
          id="chatsSubmit"
          className="invisible w-0 h-0"
        />
      </label>
      <input
        type="text" 
        name="text"
        id="chatsSendBar"
        placeholder={messages.enterMessage}
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
        className="w-full px-2 pt-3 pb-4 bg-white dark:bg-gray-800" 
      />
    </form>
  )
}

export default ChatsSendBar