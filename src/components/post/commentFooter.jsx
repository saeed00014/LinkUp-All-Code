"use client"
import { useContext, useEffect, useState } from "react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { PostCommentContext, PostContext } from "@/context/context"
import PostLike from "./postLike"
import PostComment from "./postComment"
import PostShare from "./postShare"
import CommentInput from "./commentInput"
import PostFooterTop from "./postFooterTop"
import CommentMessage from "./commentMessage"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import { baseURL } from "@/axios/axios"
import LoadingSpin from "../loadingSpin"

const CommentFooter = ({commentEdition}) => {
  const { post, postUser } = useContext(PostContext)
  const [chooseMessage, setChooseMessage] = useState("")
  const [editMessage, setEditMessage] = useState("")
  const [comments, setComments] = useState([])
  const [page, setPage] = useState(1)

  const getComments = useQuery({
    queryKey: ["message"],
    queryFn: async () => {
      const result = await baseURL.get(`/comment?post_id=${post.id}&page=${page}`)
      setComments(result.data.result)
      return result
    }
  })

  const getPageComments = useMutation({
    mutationFn: async () => {
      const result = await baseURL.get(`/comment?post_id=${post.id}&page=${page}`)
      const newPageComments = []
      result.data.result.forEach(comment => {
        newPageComments.push(comment)
      })
      setComments(oldComments => [...oldComments, ...newPageComments])
      return result
    }
  })

  useEffect(() => {
    page != 1 && getPageComments.mutate()
  }, [page])

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
      <PostCommentContext.Provider
        value={{
          chooseMessage,
          setChooseMessage,
          editMessage,
          setEditMessage,
          comments,
          setComments,
          page,
          setPage
        }}
      >
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
            {getPageComments.isPending && 
              <div className="flex justify-center items-center w-full h-full">
                <LoadingSpin />
              </div>
            }
            <CommentMessage />
          </ul>
          <div className="sticky bottom-0 px-4 pl-2 border-t border-gray-400 bg-white dark:bg-gray-800">
            <CommentInput 
              editMessage={editMessage}
              setEditMessage={setEditMessage}
              chooseMessage={chooseMessage}
              setChooseMessage={setChooseMessage}
              setComments={setComments}
              comments={comments}
              type="comments" 
            />
          </div>
        </div>
      </PostCommentContext.Provider>
    </footer>
  )
}

export default CommentFooter