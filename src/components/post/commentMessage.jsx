"use client"
import { useState } from "react"
import Draggable from "react-draggable"

const CommentMessage = ({message}) => {
  const [ isDraged, setIsdraged ] = useState(false)
  const dragHandler = () => {
    setIsdraged(!isDraged)
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
          <span className="flex py-2 px-3 w-fit max-w-[20rem] text-[.8rem] bg-gray-200 dark:bg-gray-950 rounded-[.5rem] z-20">
            {message.text}
          </span>
          {isDraged && 
            <span className="absolute w-full h-full mr-2 bg-gray-400 dark:bg-gray-700 z-10"></span>
          }
        </li>
      </Draggable>
  )
}

export default CommentMessage