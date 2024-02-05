"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { ExploreContext } from "@/context/context"
import { baseURL } from "@/axios/axios"
import LoadingSpin from "@/components/loadingSpin"

const Context = ({children}) => {
  const [searchResult, setSearchResult] = useState("")
  const [category, setCategory] = useState("date")
  const [searchValue, setSearchValue] = useState("")
  const [isSearchLoading, setIsSearchLoading] = useState(false)

  const getNewestPost = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const post = await baseURL.get(`/post`)
      return post
    }
  })

  if(getNewestPost.isPending) {
    return (
      <div className="fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center">
        <LoadingSpin />
      </div>
    )
  }
  
  if(!getNewestPost.isPending && getNewestPost.data) {
    const defaultPost = getNewestPost.data.data.response
    return (
      <ExploreContext.Provider 
        value={{
          defaultPost,
          searchResult,
          setSearchResult,
          category,
          setCategory,
          searchValue,
          setSearchValue,
          isSearchLoading,
          setIsSearchLoading
        }}
      >
        {children}
      </ExploreContext.Provider>
    )
  }
}

export default Context