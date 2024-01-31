"use client"
import { useEffect, useState } from "react"
import { PostContext } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import Comment from "./comment"
import { baseURL } from "@/axios/axios"

const Context = ({children, post, isMyPost, miniEdition}) => {
  const [isCommentActive, setIsCommentActive] = useState()
  const [isLiked, setIsLiked] = useState(false)
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

  const getUser = useQuery({
    queryKey: [`post_${post.id}`],
    queryFn: async () => {
      const users = await baseURL.get(`/post/user/${post.user_id}`)
      return users
    }
  })

  if(!getUser.isPending && !getAllLikes.isPending && getUser.data.data.response) {
    const postUser = getUser.data.data.response
    return (
      <PostContext.Provider value={{
        postUser, 
        post, 
        isMyPost,
        setIsCommentActive,
        isLiked, 
        setIsLiked,
        miniEdition
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
