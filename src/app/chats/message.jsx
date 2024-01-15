"use client"
import { useContext, useState } from "react"
import { DragedMessageContext } from "@/context/context"
import Draggable from "react-draggable"
import { messages } from "@/assets/data/data"

const Message = () => {
  const { setDragedMessage } = useContext(DragedMessageContext)
  const [ isDraged, setIsdraged ] = useState(false)
  const message = {
    id: "23",
    text: "hello im the text"
  }
  const dragHandler = () => {
    setIsdraged(!isDraged)
    !isDraged ?
      setDragedMessage(dragedMessage => [...dragedMessage, message]) 
      : setDragedMessage(dragedMessage => dragedMessage.filter((message) => message.id != "23"))
  }

  return (
      <Draggable
        axis="x"
        defaultPosition={{x: 0, y: 0}}
        position={{x: 0, y: 0}}
        bounds={{left: -10, right: 0}}
        scale={1}
        onStop={dragHandler}
      >
        <li className={`flex ${true ? "justify-start" : "justify-end" } min-w-full`}>
          <span className="flex py-2 px-3 w-full max-w-[20rem] text-[.8rem] bg-white dark:bg-gray-800 rounded-[.5rem] z-20">
            {messages.lastMassege}&nbsp;{messages.lastMassege}&nbsp;{messages.lastMassege}&nbsp;{messages.lastMassege}&nbsp;{messages.lastMassege}
          </span>
          {isDraged && 
            <span className="absolute w-full h-full mr-2 bg-gray-700 z-10"></span>
          }
        </li>
      </Draggable>
  )
}

export default Message