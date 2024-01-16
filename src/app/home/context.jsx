"use client"
import { baseURL } from "@/axios/axios"
import { HomeContext } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const Context = ({children}) => {
  const localUser = localStorage.getItem("user")
  const loginUser = localUser && JSON.parse(localUser)
  const [searchResult, setSearchResult] = useState("")

  const suggestionUser = useQuery({
    queryKey: ["suggestionUser"],
    queryFn: async () => {
      const users = await baseURL.get("/user")
        return users
    }
  })

  const { isPending, error, data } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const post = await baseURL.get(`/post`)
      return post
    }
  })
  if(!isPending && loginUser && !suggestionUser.isPending) {
    const post = data.data.response
    const suggestedUsers = suggestionUser.data.data.response
    return (
      <HomeContext.Provider 
        value={{
          loginUser,
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