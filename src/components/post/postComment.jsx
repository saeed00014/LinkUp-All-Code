"use client"

import { post } from "@/assets/data/data"
import { FaRegComment } from "react-icons/fa"
import PostFooterButtons from "./postFooterButtons"

const PostComment = () => {
  const handleClick = () => {
    document.getElementById("commentInputLable").click()
  }

  return (
    <span 
      onClick={() => handleClick()}
      className="w-full" 
    >
      <PostFooterButtons 
        icon={<FaRegComment />} 
        text={post.comment} 
      />
    </span>
  )
}

export default PostComment