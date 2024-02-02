"use client"
import { useContext, useEffect, useRef } from "react"
import { PostCommentContext } from "@/context/context"
import { useIntersection } from "@mantine/hooks"
import PostComment from "./postComment"

const postCommentList = () => {
  const { page, setPage, comments } = useContext(PostCommentContext)
  
  const lastPostRef = useRef(null)
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1
  })

  useEffect(() => {
    if(entry && entry.isIntersecting) {
      setPage(page + 1)
    } 
  }, [entry])

  return (
    <>
      {comments ? 
        comments.map((message, i) => {
          const isRef = (i == page * 50 - 1)
          return (
            <>
              {isRef ? 
                <div 
                  ref={ref}
                  id={`ffffffffffffff${message.id}`}
                  key={message.id}
                  className="w-full px-4"
                >
                  <PostComment 
                    message={message} 
                  />
                </div> 
              : <div 
                  key={message.id}
                  id={i}
                  className="w-full px-4"
                >
                  <PostComment 
                    message={message} 
                  />
                </div> 
              }
            </> 
          )
        }) 
      : null}
    </>
  )
}

export default postCommentList