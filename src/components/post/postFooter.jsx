"use client"
import { useContext, useState } from "react"
import { PostContext } from "@/context/context"
import PostLike from "./postLike"
import PostComment from "./postComment"
import PostShare from "./postShare"
import CommentInput from "./commentInput"
import PostFooterTop from "./postFooterTop"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import { postText } from "@/assets/data/data" 

const PostFooter = () => {
  const { setIsCommentActive, post, postUser, miniEdition } = useContext(PostContext)

  return (
    <footer className={`flex flex-col  ${miniEdition ? "px-2" : "px-4"} mt-1`}>
      <PostFooterTop />
      <div className={`flex justify-between items-center py-1 mt-2 ${post.isComments == 0 && "mb-2"} border-t-2 border-b-2 dark:border-gray-600 gap-1`}>
        <PostLike />
        {post.isComments == 1 && 
          <PostComment />
        }
        <PostShare />
      </div>
      {post.isComments == 1 && 
        <div className="flex flex-col w-full gap-2">
          <button 
            onClick={() => setIsCommentActive(true)} className="flex justify-start w-full text-[.8rem] hover:underline cursor-pointer"
          >
            {postText.allComments}
          </button>
          {post.myComment && 
          <div className="flex w-full gap-2">
            <span className="relative w-10 min-w-10 h-10 rounded-full overflow-hidden">
              <Image 
                fill={true}
                src={postUser.image || defaultImage}
                alt="profile picture"
              />
            </span>
            <div className="flex flex-col w-full h-fit px-2 pb-1 ml-10 bg-gray-200 dark:bg-gray-700 rounded-[.5rem] text-[.9rem]">
              <span>
                {postUser.firstname}
              </span>
              <span>
                {post.myComment}
              </span>
            </div>
          </div>
          }
          <CommentInput type="home" />
        </div>
      }
    </footer>
  )
}

export default PostFooter