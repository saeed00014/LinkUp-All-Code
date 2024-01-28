"use client"
import { useState } from "react"
import Draggable from "react-draggable"
import { useQuery } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"

const CommentMessage = ({message}) => {
  const [ isDraged, setIsdraged ] = useState(false)
  const dragHandler = () => {
    setIsdraged(!isDraged)
  }

  const commentUser = useQuery({
    queryKey: [`commentUser${message.user_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/comment/user?user_id=${message.user_id}`)
      return response
    }
  })
  
  if(!commentUser.isPending) {
    const user = commentUser.data.data.response
    return (
      <Draggable
        axis="x"
        defaultPosition={{x: 0, y: 0}}
        position={{x: 0, y: 0}}
        bounds={{left: -10, right: 0}}
        scale={1}
        onStop={dragHandler}
      >
        <li className={`flex items-end ${true ? "justify-start" : "justify-end" } min-w-full gap-2`}>
          <span className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image 
              fill={true}
              src={user.image || defaultImage}
              alt="profile picture"
            />
          </span>
          <div>
            <span className="text-[.7rem]">
              {user.firstname}
            </span>
            <span className="flex py-2 px-3 w-fit max-w-[20rem] text-[.8rem] bg-white dark:bg-gray-800 rounded-[.5rem] z-20">
              {message.text}
            </span>
          </div>
          {isDraged && 
            <span className="absolute w-full h-full mr-2 bg-gray-400 dark:bg-gray-700 z-10"></span>
          }
        </li>
      </Draggable>
    ) 
  }
}

export default CommentMessage