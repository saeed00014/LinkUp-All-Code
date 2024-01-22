"use client"
import { ProfileContext } from "@/context/context"
import { baseURL } from "@/axios/axios"
import { useQuery } from "@tanstack/react-query"

const Context = ({children}) => {
  const url = window.location.href
  const targetUser_id = url.split("/")[url.split("/").length - 1]
  const userPosts = useQuery({
    queryKey: ["userPosts"],
    queryFn: async () => {
      const post = await baseURL.get(`/post/${targetUser_id}`)
      return post
    }
  })
  
  const { isPending, error, data } = useQuery({
    queryKey: ["profileUser"],
    queryFn: async () => {
      const user = await baseURL.get(`/user/${targetUser_id}`)
      return user
    }
  })
  if(!isPending && !userPosts.isPending) {
    const user = data.data.response
    const posts = userPosts.data.data.response
    const isLoginUser = userPosts.data.data.isLoginUser
    return (
      <ProfileContext.Provider 
        value={{
          user, 
          posts,
          isLoginUser,
          targetUser_id
        }}
      >
        {children}
      </ProfileContext.Provider>
    )
  }
}

export default Context