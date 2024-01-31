"use client"
import { useEffect, useState } from "react"
import { IoShareSocialOutline } from "react-icons/io5"
import PostFooterButtons from "./postFooterButtons"
import { postText, postShare } from "@/assets/data/data"
import CloseHeader from "../closeHeader"
import UserSearch from "@/components/userSearch"
import PostShareFooter from "./postShareFooter"
import PostShareUser from "@/components/post/postShareUser"
import { useQuery } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"
import PostShareUserInfo from "./postShareUserInfo"
import { PostShareContext } from "@/context/context"

const PostShare = () => {
  const [isShareActive, setIsShareActive] = useState(false)
  const [searchResult, setSearchResult] = useState("")
  const [choosedUsers, setChooseUsers] = useState("")

  useEffect(() => {
    !isShareActive && setChooseUsers("")
  }, [isShareActive])

  const loginUserFreind = useQuery({
    queryKey: ["loginUserFreind"],
    queryFn: async () => {
      const response = await baseURL.get(`/follow`)
      return response.data.response
    }
  })
  return (
    <PostShareContext.Provider 
      value={{
        choosedUsers,
        setChooseUsers
      }}
    >
      <span 
        onClick={() => setIsShareActive(true)} 
        className="w-full"
      >
        <PostFooterButtons 
          icon={<IoShareSocialOutline />} 
          text={postText.share} 
        />
      </span>
      {isShareActive && !loginUserFreind.isPending && 
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/20 dark:bg-white/20 z-[90]">
          <div className="flex flex-col w-full max-w-[550px] bg-white dark:bg-gray-800 rounded-[1rem]">
            <div className="px-4">
              <CloseHeader 
                setEvent={setIsShareActive} 
                title={postShare.share} 
              />
              <UserSearch 
                type="postShare" 
                setSearchResult={setSearchResult}
              />
            </div>
            <div className="flex flex-col h-screen min-h-full max-h-[25rem] bg-gray-900 gap-1">
              <span className="text-[.9rem] px-3">
                {postShare.suggested}
              </span>
              <div className="flex flex-col overflow-y-scroll">
                {!searchResult && loginUserFreind.data.map((user) => {
                  return (
                    <PostShareUserInfo 
                      user={user}
                    />
                  )
                })}
                {searchResult && searchResult.map((user) => {
                  return (
                    <PostShareUser 
                      user={user}
                    />
                  )
                })}
              </div>
            </div>
            <PostShareFooter />
          </div>
        </div>
      }
    </PostShareContext.Provider>
  )
}

export default PostShare