"use client"
import { post } from "@/assets/data/data"
import profile from "@/assets/images/profile.jpg"
import Image from "next/image"
import { IoSend } from "react-icons/io5"

const CommentInput = ({type}) => {
  return (
    <div className={`${type == "comments" ? "sticky bottom-0" : "relative" } flex items-center justify-start w-full gap-2 bg-white dark:bg-gray-800`}>
      <span className="relative w-10 min-w-10 h-10 rounded-full overflow-hidden">
        <Image 
          file={true}
          src={profile}
          alt="profile picture"
          />
      </span>
      <label 
        id="commentInputLable"
        htmlFor="commentInput"
        className="absolute left-0 cursor-pointer flex items-center justify-center h-full w-12"  
      >
        <IoSend />
      </label>
      <input
        type="text"
        name="text"
        id="commentInput" 
        placeholder={post.input}
        className="flex items-center justify-start w-full h-fit py-1 pr-4 pl-10 rounded-full bg-gray-200 dark:bg-gray-700 duration-100">
      </input>
    </div>
  )
}

export default CommentInput