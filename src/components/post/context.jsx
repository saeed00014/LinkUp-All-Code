"use client"
import { useEffect, useState } from "react"
import { PostContext } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import Comment from "./comment"
import { baseURL } from "@/axios/axios"

const Context = ({children, post}) => {
  const [isCommentActive, setIsCommentActive] = useState()
  const [isLiked, setIsLiked] = useState(false)
  const [comments, setComments] = useState("")
  const likedPostsIdStorage = JSON.parse(localStorage.getItem("likedPostsId"))

  useEffect(() => {
    const checkLike = () => {
      likedPostsIdStorage && 
        likedPostsIdStorage.find((post_id) => post_id.post_id == post.id) && 
          setIsLiked(true)
    }
    checkLike()
  }, [post])

  const getAllLikes = useQuery({
    queryKey: ["userLikes"],
    queryFn: async () => {
      const likes = await baseURL.get(`/like`)
      if(likes.data) {
        localStorage.setItem("likedPostsId", JSON.stringify(likes.data.response))
        return likes
      }
    }
  })

  const { isPending, error, data } = useQuery({
    queryKey: [`post_${post.id}`],
    queryFn: async () => {
      const users = await baseURL.get(`/post/user/${post.user_id}`)
      return users
    }
  })
  
  if(!isPending && !getAllLikes.isPending && data.data.response) {
    const postUser = data.data.response
    return (
      <PostContext.Provider value={{
        postUser, 
        post, 
        setIsCommentActive,
        isLiked, 
        setIsLiked,
        comments,
        setComments
        }}
      >
        {children}
        {isCommentActive && 
          <Comment />
        }
      </PostContext.Provider> 
    )
  }
}

export default Context
