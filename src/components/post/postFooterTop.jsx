"use client"
import { post } from "@/assets/data/data"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"

const PostFooterTop = ({setIsLiked, isLiked}) => {

  return (
    <div className="flex justify-between w-full">
      <div onClick={() => setIsLiked(!isLiked)} className="relative flex items-center justify-end w-fit gap-2 cursor-pointer z-10">
        <span>
          {isLiked ?  <FaHeart /> : <FaRegHeart /> }
        </span>
        <span>
          7                                     
        </span>
        {isLiked && 
          <span>
            {post.liked}
          </span>
        }
      </div>
      <div className="flex gap-2">
        <span>
          23
        </span>
        <span>
          {post.comments}
        </span>
      </div>
    </div>
  )
}

export default PostFooterTop