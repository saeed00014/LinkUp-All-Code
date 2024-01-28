"use client"
import { useContext, useRef, useState } from "react"
import { IoSend } from "react-icons/io5"
import { PostContext } from "@/context/context"
import { postText } from "@/assets/data/data"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import { useMutation } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"

const CommentInput = ({type}) => {
  const { post, setComments, comments, miniEdition } = useContext(PostContext)
  const [inputValue, setInputValue] = useState("")
  const localUser = localStorage.getItem("user")
  const loginUser = localUser && JSON.parse(localUser)
  const mutationPost = useMutation({
    mutationFn: async (newComment) => {
      const response = await baseURL.post(`/comment?post_id=${post.id}&loginUser_id=${loginUser.id}`, newComment)
    }
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const text = ref.current.text.value
    text && setComments([...comments,{user_id: loginUser.id, text: inputValue}])
    text && mutationPost.mutate({text: text})
  }
  
  const ref = useRef()
  return (
    <form 
      ref={ref}
      onSubmit={(e) => handleSubmit(e)}
      className={`${type == "comments" ? "sticky bottom-0" : "relative" } flex items-center justify-start w-full py-2 gap-2 rounded-b-[1rem]`}
    >
      <label 
        id={`commentInputLable${post.id}`}
        htmlFor={`commentInput${post.id}`}
        className="relative w-10 min-w-10 h-10 rounded-full overflow-hidden"
      >
        <Image 
          src={loginUser.image || defaultImage}
          width={55}
          height={55}
          alt="profile picture"
        />
      </label>
      <input
        type="text"
        name="text"
        id={`commentInput${post.id}`} 
        placeholder={postText.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex items-center justify-start w-full h-fit py-1 pr-4 pl-10 rounded-full bg-gray-200 dark:bg-gray-700 duration-100"
      />
      <label 
        htmlFor={`commentInputSubmit${post.id}${type}`} 
        className={`absolute ${miniEdition ? "left-0" : "left-2"}  cursor-pointer flex items-center justify-center h-full w-12`}  
      >
        <IoSend />
        <input 
          type="submit" 
          id={`commentInputSubmit${post.id}${type}`} 
          className="invisible w-0"
        />
      </label>
    </form>
  )
}

export default CommentInput