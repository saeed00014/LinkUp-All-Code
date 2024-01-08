"use client"
import { useState } from "react"
import PostLike from "./postLike"
import PostComment from "./postComment"
import PostShare from "./postShare"
import CommentSuggested from "./commentSuggested"
import CommentInput from "./commentInput"
import PostAllComments from "./comments"
import { post } from "@/assets/data/data" 
import PostFooterTop from "./postFooterTop"

const PostFooter = () => {
  const [isAllCommentsActive, setIsAllCommentsActive] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <footer className="flex flex-col px-4 mt-1">
      <PostFooterTop setIsLiked={setIsLiked} isLiked={isLiked} />
      <div className="flex justify-between items-center py-1 mt-2 border-t-2 border-b-2 dark:border-gray-600 gap-1">
        <PostLike setIsLiked={setIsLiked} isLiked={isLiked} />
        <PostComment />
        <PostShare />
      </div>
      <div className="flex flex-col w-full gap-2">
        <button 
          onClick={() => setIsAllCommentsActive(!isAllCommentsActive)} className="flex justify-start w-full text-[.8rem] hover:underline cursor-pointer"
        >
          {post.allComments}
        </button>
        <CommentSuggested />
        <CommentInput />
      </div>
      {isAllCommentsActive && 
        <PostAllComments setIsAllCommentsActive={setIsAllCommentsActive} />
      }
    </footer>
  )
}

export default PostFooter