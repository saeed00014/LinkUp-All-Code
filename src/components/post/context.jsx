"use client"
import { useEffect, useState } from "react"
import { PostContext } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import Cookies from "universal-cookie"
import Comment from "./comment"
import { baseURL } from "@/axios/axios"

const Context = ({children, post}) => {
  const [isCommentActive, setIsCommentActive] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const likedPostsIdStorage = JSON.parse(localStorage.getItem("likedPostsId"))

  likedPostsIdStorage[0] && useEffect(() => {
    const checkLike = () => {
      likedPostsIdStorage.find((post_id) => post_id.post_id == post.id) && 
        setIsLiked(true)
    }
    checkLike()
  }, [post])

  // const getAllLikes = useQuery({
  //   queryKey: ["userLikes"],
  //   queryFn: async () => {
  //     const likes = !likedPostsIdStorage && await baseURL.get(`/like`)
  //     console.log(likes)
  //     return likes
  //   }
  // })
  // if(getAllLikes.data) {
  //   const allUserLikes = getAllLikes.data.data.response
  //   localStorage.setItem("likedPostsId", JSON.stringify(allUserLikes))
  // }

  const { isPending, error, data } = useQuery({
    queryKey: ["postUser"],
    queryFn: async () => {
      const users = await baseURL.get(`/post/user/${post.user_id}`)
      return users
    }
  })
  
  if(data) {
    const postUser = data.data.response
    return (
      <PostContext.Provider value={{
        postUser, 
        post, 
        setIsCommentActive,
        isLiked, 
        setIsLiked
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
