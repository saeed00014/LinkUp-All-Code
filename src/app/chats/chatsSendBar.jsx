"use client"
import { useState } from "react"
import { IoSend } from "react-icons/io5"
import { messages } from "@/assets/data/data"

const ChatsSendBar = () => {
  const [ message, setMessage ] = useState("")
  const handleSubmit = () => {

  }

  return (
    <div className="flex items-center w-full">
      <label 
        htmlFor=""
        onClick={handleSubmit}
        className="absolute left-0 flex items-center justify-center w-[3rem] h-full text-[1.2rem] rotate-180 cursor-pointer"
      >
        <IoSend />
      </label>
      <input
        type="text" 
        name="text"
        id="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={messages.enterMessage}
        className="w-full px-2 pt-3 pb-4 bg-white dark:bg-gray-800" 
      />
    </div>
  )
}

export default ChatsSendBar