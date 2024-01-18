"use client"
import { useContext, useState } from "react"
import { ChatContext, DragedMessageContext } from "@/context/context"
import Draggable from "react-draggable"

const Message = ({message}) => {
  const { setDragedMessage } = useContext(DragedMessageContext)
  const { currentChat } = useContext(ChatContext)
  const { targetUser, chat } = currentChat
  const [ isDraged, setIsdraged ] = useState(false)
  console.log(message)
  const dragHandler = () => {
    setIsdraged(!isDraged)
    !isDraged ?
      setDragedMessage(dragedMessage => [...dragedMessage, message]) 
      : setDragedMessage(dragedMessage => dragedMessage.filter((message) => message.id != "23"))
  }
  console.log(targetUser.id, message.targetUser_id)
  return (
      <Draggable
        axis="x"
        defaultPosition={{x: 0, y: 0}}
        position={{x: 0, y: 0}}
        bounds={{left: -10, right: 0}}
        scale={1}
        onStop={dragHandler}
      >
        <li className={`flex ${targetUser.id == message.targetUser_id ? "justify-start" : "justify-end text-red-500" } w-full`}>
          <span className="flex py-2 px-3 w-fit max-w-[20rem] text-[.8rem] bg-white dark:bg-gray-800 rounded-[.5rem] z-20">
            {message.message}
          </span>
          {isDraged && 
            <span className="absolute w-full h-full mr-2 bg-gray-700 z-10"></span>
          }
        </li>
      </Draggable>
  )
}

export default Message