"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { ProfileContext } from "@/context/context"
import LoadingSpin from "@/components/loadingSpin"
import { baseURL } from "@/axios/axios"

const Context = ({children}) => {
  const [page, setPage] = useState(1)
  const [newPost, setNewPost] = useState([])
  const url = window.location.href
  const targetUser_id = url.split("/")[url.split("/").length - 1]

  const getProfileUserPosts = useQuery({
    queryKey: [`userPosts${targetUser_id}`],
    queryFn: async () => {
      const post = await baseURL.get(`/user/post/${targetUser_id}?page=${page}`)
      return post
    }
  })
  
  const getProfileUser = useQuery({
    queryKey: [`profileUser${targetUser_id}`],
    queryFn: async () => {
      const user = await baseURL.get(`/user/${targetUser_id}`)
      return user
    }
  })

  

  if(getProfileUser.isPending) {
    return (
      <div className="fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center">
        <LoadingSpin />
      </div>
    )
  }

  if(!getProfileUser.isPending && !getProfileUserPosts.isPending && getProfileUser.data.data.response) {
    const user = getProfileUser.data.data.response
    const posts = getProfileUserPosts.data.data.response
    const isLoginUser = getProfileUserPosts.data.data.isLoginUser
    return (
      <ProfileContext.Provider 
        value={{
          user, 
          posts,
          newPost,
          setNewPost,
          isLoginUser,
          targetUser_id,
          page,
          setPage
        }}
      >
        {children}
      </ProfileContext.Provider>
    )
  }
}

export default Context