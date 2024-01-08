"use client"
import { useState } from "react"
import { IoShareSocialOutline } from "react-icons/io5"
import PostFooterButtons from "./postFooterButtons"
import { post, postShare } from "@/assets/data/data"
import CloseHeader from "../closeHeader"
import UserSearch from "@/components/userSearch"
import UserSearchResult from "@/components/userSearchResult"
import PostShareFooter from "./postShareFooter"

const PostShare = () => {
  const [isShareActive, setIsShareActive] = useState(false)
  return (
    <>
      <span 
        onClick={() => setIsShareActive(true)} 
        className="w-full"
      >
        <PostFooterButtons 
          icon={<IoShareSocialOutline />} 
          text={post.share} 
        />
      </span>
      {isShareActive && 
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/20 dark:bg-white/10 z-[90]">
          <div className="flex flex-col w-full max-w-[600px] px-4 bg-white dark:bg-gray-800 rounded-[1rem]">
            <CloseHeader setEvent={setIsShareActive} title={postShare.share} />
            <UserSearch type="postShare" />
            <div className="flex flex-col h-screen min-h-full max-h-[30rem] gap-1">
              <span className="text-[.9rem] px-3">
                {postShare.suggested}
              </span>
              <div className="flex flex-col overflow-y-scroll">
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
                <UserSearchResult type="postShare" />
              </div>
            </div>
            <PostShareFooter />
          </div>
        </div>
      }
    </>
  )
}

export default PostShare