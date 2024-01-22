"use client"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { sideBar } from "@/assets/data/data"
import { useMutation } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"
import { useContext } from "react"
import { ChatContext } from "@/context/context"

const ChatSearch = () => {
  const { setSearchResult } = useContext(ChatContext)
  const mutation = useMutation({
    mutationFn: async (searchValue) => {
      const response = await baseURL.get(`/user/search?username=${searchValue}`)
      if(response.data) {
        setSearchResult(response.data.response)
      }
    }
  })
  const handleChange = (e) => {
    const value = e.target.value
    !value && setSearchResult("")
    value && mutation.mutate(value)
  }

  return (
    <div className="relative flex items-center justify-center w-full z-40">
      <div className="relative flex items-center w-full gap-1 dark:bg-gray-800 bg-white border-b border-b-gray-400 dark:border-b-gray-600 px-2 py-2 min-h-[3.6rem] z-40">
        <label 
          htmlFor="text"
          className="absolute right-[1.25rem] font-[900] cursor-text z-50"
        >
          <FaMagnifyingGlass />
        </label>
        <input 
          type="text" 
          name="text"
          id="text"
          placeholder={sideBar.searchBar}
          onChange={(e) => handleChange(e)}
          className="w-full py-2 pr-10 pl-1  bg-gray-200 dark:bg-gray-700 rounded-[3rem] z-40"
        />
      </div>
    </div>
  )
}

export default ChatSearch