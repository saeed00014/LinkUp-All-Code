"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { ExploreContext } from "@/context/context"
import { baseURL } from "@/axios/axios"

const Context = ({children}) => {
  const [searchResult, setSearchResult] = useState("")
  const [defaultPost, setdefaultPost] = useState("")
  const [category, setCategory] = useState("date")
  const [searchValue, setSearchValue] = useState("")
  const { isPending, error, data } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const post = await baseURL.get(`/post`)
      const posts = post.data.response
      setdefaultPost(posts)
    }
  })
  
  if(!isPending) {
    return (
      <ExploreContext.Provider 
        value={{
          defaultPost,
          searchResult,
          setSearchResult,
          category,
          setCategory,
          searchValue,
          setSearchValue
        }}
      >
        {children}
      </ExploreContext.Provider>
    )
  }
}

export default Context