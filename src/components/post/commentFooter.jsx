"use client"
import { useContext } from "react"
import { useQuery } from "@tanstack/react-query"
import { PostContext } from "@/context/context"
import PostLike from "./postLike"
import PostComment from "./postComment"
import PostShare from "./postShare"
import CommentInput from "./commentInput"
import PostFooterTop from "./postFooterTop"
import { baseURL } from "@/axios/axios"
import CommentMessage from "./commentMessage"

const CommentFooter = () => {
  const { post } = useContext(PostContext)
  const {isPending, error, data} = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const result = await baseURL.get(`/comment?post_id=${post.id}`)
      return result
    }
  })
  return (
    <footer className="flex flex-col px-4 mt-1">
      <PostFooterTop />
      <div className="flex justify-between items-center py-1 mt-2 border-t-2 border-b-2 dark:border-gray-600 gap-1">
        <PostLike />
        <PostComment />
        <PostShare />
      </div>
      <div className="flex flex-col w-full min-h-[15rem] gap-2 mt-2">
        <ul className="relative flex flex-col w-full h-full justify-start items-start py-2 px-2 gap-1">
          {data ? 
            data.data.result.map((message) => {
              console.log(message)
              return ( 
                <div key={message.id} className="w-full">
                  <CommentMessage message={message} />
                </div>
              )
          }) 
          : null}
        </ul>
        <CommentInput type="comments" />
      </div>
    </footer>
  )
}

export default CommentFooter