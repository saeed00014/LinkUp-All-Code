"use client"
import { useContext, useEffect, useRef } from "react"
import Message from "./message"
import { useIntersection } from "@mantine/hooks"
import { PostCommentContext } from "@/context/context"

const CommentMessage = () => {
  const { page, setPage, setComments, comments } = useContext(PostCommentContext)
  
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
          console.log(message.id)
          return (
            <>
              {isRef ? 
                <div 
                  ref={ref}
                  id={`ffffffffffffff${message.id}`}
                  key={message.id}
                  className="w-full px-4"
                >
                  <Message 
                    message={message} 
                  />
                </div> 
              : <div 
                  key={message.id}
                  id={i}
                  className="w-full px-4"
                >
                  <Message 
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

export default CommentMessage