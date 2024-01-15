"use client"
import { useContext } from "react"
import { PostContext } from "@/context/context"
import { FaRegComment } from "react-icons/fa"
import { postText } from "@/assets/data/data"
import PostFooterButtons from "./postFooterButtons"

const PostComment = () => {
  const { post } = useContext(PostContext)
  const handleClick = () => {
    document.getElementById(`commentInputLable${post.id}`).click()
  }

  return (
    <span 
      onClick={() => handleClick()}
      className="w-full" 
    >
      <PostFooterButtons 
        icon={<FaRegComment />} 
        text={postText.comment} 
      />
    </span>
  )
}

export default PostComment