"use client"
import { useContext } from "react"
import { PostContext } from "@/context/context"
import CommentFooter from "./commentFooter"
import CloseHeader from "../closeHeader"
import PostHeader from "./postHeader"
import PostContent from "./postContent"

const Comment = () => {
  const { postUser, setIsCommentActive } = useContext(PostContext)
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center bg-gray-300/50 z-[90]">
      <article className="flex flex-col w-[550px] min-w-[550px] h-fit mb-4 rounded-[1rem] bg-white dark:bg-gray-800 dark:text-white overflow-hidden">
        <div className="px-4 border-b border-gray-400">
          <CloseHeader 
            setEvent={setIsCommentActive} 
            title={`پست ${postUser.firstname}`} 
          />
        </div>
        <div className="flex flex-col max-h-[88vh] pt-4 overflow-y-scroll gap-1">
          <PostHeader commentEdition={true} />
          <PostContent commentEdition={true} />
          <CommentFooter commentEdition={true} />
        </div>
      </article>
    </div>
  )
}

export default Comment