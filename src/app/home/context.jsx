"use client"
import { baseURL } from "@/axios/axios"
import LoadingSpin from "@/components/loadingSpin"
import { HomeContext } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const Context = ({children}) => {
  const localUser = localStorage.getItem("user")
  const localLoginUser = localUser && JSON.parse(localUser)
  const [searchResult, setSearchResult] = useState("")

  const getLoginUser = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get(`/user/loginUser/userInfo`)
      return response
    }
  })

  const getSuggestionUser = useQuery({
    queryKey: ["suggestionUser"],
    queryFn: async () => {
      const users = await baseURL.get("/user")
        return users
    }
  })

  const getRandomPost = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const post = await baseURL.get(`/post/random`)
      return post
    }
  })

  if(getRandomPost.isPending, getSuggestionUser.isPending) {
    return (
      <div className="fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center">
        <LoadingSpin />
      </div>
    )
  }

  if(!getRandomPost.isPending && !getLoginUser.isPending && !getSuggestionUser.isPending) {
    const post = getRandomPost.data.data.response
    const suggestedUsers = getSuggestionUser.data.data.response
    const loginUser = getLoginUser.data.data.response
    return (
      <HomeContext.Provider 
        value={{
          loginUser,
          localLoginUser,
          post,
          searchResult,
          setSearchResult,
          suggestedUsers
        }}
      >
        {children}
      </HomeContext.Provider>
    )
  }
}

export default Context