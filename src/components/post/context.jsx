"use client"
import { useEffect, useState } from "react"
import { PostContext } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import Comment from "./postCommentPage"
import { baseURL } from "@/axios/axios"
import PostShare from "./postShareUserPage"

const Context = ({children, post, isMyPost, miniEdition}) => {
  const [isCommentActive, setIsCommentActive] = useState()
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState("")
  const [commentCount, setCommentCount] = useState("")
  const [isShareActive, setIsShareActive] = useState(false)
  const likedPostsIdStorage = JSON.parse(localStorage.getItem("likedPostsId"))

  const getLoginUser = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get(`/user/loginUser/userInfo`)
      return response
    }
  })

  useEffect(() => {
    const checkLike = () => {
      likedPostsIdStorage && 
        likedPostsIdStorage.find((post_id) => post_id.post_id == post.id) && 
          setIsLiked(true)
    }
    checkLike()
  }, [post])

  const getAllLoginUserLikes = useQuery({
    queryKey: ["userLikes"],
    queryFn: async () => {
      const likes = await baseURL.get(`/like`)
      if(likes.data) {
        localStorage.setItem("likedPostsId", JSON.stringify(likes.data.response))
        return likes
      }
    }
  })

  const getAllPostLikesCount = useQuery({
    queryKey: [`postLikesCount${post.id}`],
    queryFn: async () => {
      const likesCount = await baseURL.get(`/like/post/${post.id}`)
      setLikeCount(likesCount.data.response)
      return likesCount
    }  
  })

  const getAllPostCommentsCount = useQuery({
    queryKey: [`postCommentsCount${post.id}`],
    queryFn: async () => {
      const commentsCount = await baseURL.get(`/comment/post/${post.id}`)
      setCommentCount(commentsCount.data.response)
      return commentsCount
    }  
  })

  const getUser = useQuery({
    queryKey: [`post_${post.id}`],
    queryFn: async () => {
      const users = await baseURL.get(`/post/user/${post.user_id}`)
      return users
    }
  })

  if(!getLoginUser.isPending && !getUser.isPending && !getAllLoginUserLikes.isPending && getUser.data.data.response && !getAllPostLikesCount.isPending && !getAllPostCommentsCount.isPending) {
    const postUser = getUser.data.data.response
    const loginUser = getLoginUser.data.data.response
    return (
      <PostContext.Provider 
        value={{
          postUser, 
          post, 
          isMyPost,
          setIsCommentActive,
          isLiked, 
          setIsLiked,
          miniEdition,
          likeCount,
          setLikeCount,
          commentCount,
          loginUser,
          setIsShareActive
        }}
      >
        {children}
        {isCommentActive && 
          <Comment />
        }
        {isShareActive && 
          <PostShare
            setIsShareActive={setIsShareActive}
          />
        }
      </PostContext.Provider> 
    )
  }
}

export default Context
