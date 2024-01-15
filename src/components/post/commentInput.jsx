"use client"
import { useContext } from "react"
import { IoSend } from "react-icons/io5"
import { PostContext } from "@/context/context"
import Cookies from "universal-cookie"
import { postText } from "@/assets/data/data"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import { useMutation } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"

const CommentInput = ({type}) => {
  const cookies = new Cookies()
  const LoginUser = cookies.get("user")
  console.log(LoginUser)
  const { post, postUser } = useContext(PostContext)
  const mutationPost = useMutation({
    mutationFn: async (newComment) => {
      const response = await baseURL.post(`/comment?post_id=${post.id}&loginUser_id=${LoginUser.id}`, newComment)
      console.log(response)
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.target.text.value
    text && mutationPost.mutate({text})
  }
  
  return (
    <form 
      onSubmit={(e) => handleSubmit(e)}
      className={`${type == "comments" ? "sticky bottom-0" : "relative" } flex items-center justify-start w-full gap-2 bg-white dark:bg-gray-800`}
    >
      <label 
        id={`commentInputLable${post.id}`}
        htmlFor={`commentInput${post.id}`}
        className="relative w-10 min-w-10 h-10 rounded-full overflow-hidden"
      >
        <Image 
          src={LoginUser.image || defaultImage}
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
        className="flex items-center justify-start w-full h-fit py-1 pr-4 pl-10 rounded-full bg-gray-200 dark:bg-gray-700 duration-100">
      </input>
      <label 
        htmlFor={`commentInputSubmit${post.id}`} 
        className="absolute left-0 cursor-pointer flex items-center justify-center h-full w-12"  
      >
        <IoSend />
        <input 
          type="submit" 
          id={`commentInputSubmit${post.id}`} 
          className="invisible w-0"
        />
      </label>
    </form>
  )
}

export default CommentInput