"use client"
import { useContext } from "react"
import { PostContext } from "@/context/context"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { postText } from "@/assets/data/data"

const PostFooterTop = () => {
  const { post, isLiked } = useContext(PostContext)
  return (
    <div className="flex justify-between w-full">
      <div className="relative flex items-center justify-end w-fit gap-2 cursor-pointer z-10">
        <span>
          {isLiked ?  <FaHeart /> : <FaRegHeart /> }
        </span>
        <span>
          {post.likes}                                  
        </span>
        {isLiked && 
          <span>
            {postText.like}
          </span>
        }
      </div>
      <div className="flex gap-2">
        <span>
          {post.comments}
        </span>
        <span>
          {postText.comments}
        </span>
      </div>
    </div>
  )
}

export default PostFooterTop