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
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"

const CommentFooter = ({commentEdition}) => {
  const { post, postUser, comments, setComments } = useContext(PostContext)
  const {isPending, error, data} = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const result = await baseURL.get(`/comment?post_id=${post.id}`)
      setComments(result.data.result)
      console.log(result)
      return result
    }
  })
  return (
    <footer className="flex flex-col">
      <PostFooterTop 
        commentEdition={commentEdition}
      />
      <div className="flex justify-between items-center py-1 px-4 mt-2 border-t-2 border-b-2 dark:border-gray-600 gap-1">
        <PostLike />
        <PostComment />
        <PostShare />
      </div>
      <div className="flex flex-col w-full min-h-[15rem]">
        <ul className="relative flex flex-col w-full h-full justify-start items-start pb-2 gap-1 bg-gray-200 dark:bg-gray-950">
          {post.myComment && 
            <li className={`flex items-end ${true ? "justify-start" : "justify-end" } min-w-full -mt-1 px-4 gap-2`}>
              <span className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image 
                  fill={true}
                  src={postUser.image || defaultImage}
                  alt="profile picture"
                />
              </span>
              <div>
                <span className="text-[.7rem]">
                  {postUser.firstname}
                </span>
                <span className="flex py-2 px-3 w-fit max-w-[20rem] text-[.8rem] bg-gray-200 dark:bg-gray-800 rounded-[.5rem] z-20">
                  {post.myComment}
                </span>
              </div>
            </li>
          }
          {comments ? 
            comments.map((message) => {
              return ( 
                <div key={message.id} className="w-full px-4">
                  <CommentMessage message={message} />
                </div>
              )
          }) 
          : null}
        </ul>
        <div className="sticky bottom-0 px-4 pl-2 bg-white dark:bg-gray-800">
          <CommentInput type="comments" />
        </div>
      </div>
    </footer>
  )
}

export default CommentFooter