"use client"

import { postEdit, postMake } from "@/assets/data/data"
import PostMakeButtons from "./postMakeButtons"
import { HiHashtag } from "react-icons/hi"
import { IoMdPhotos } from "react-icons/io"
import { IoVideocam } from "react-icons/io5"
import Image from "next/image"
import profile from "@/assets/images/profile.jpg"
import PostEdit from "./postMaker"
import { useState } from "react"
import PostEditHeader from "./postMakerHeader"

const PostMake = () => {
  const [makePost, setMakePost] = useState(false)

  return (
    <div className="flex flex-col w-full max-w-[550px] min-h-[123px] pt-3 pb-2 px-4 rounded-[.8rem] bg-white dark:bg-gray-800">
      <div className="flex items-center gap-4 pb-3 mb-1 border-b-2 dark:border-gray-600">
        <span className="relative min-w-12 h-12 rounded-full overflow-hidden">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
          />
        </span>
        <span 
          onClick={() => setMakePost("text")} 
          className="flex items-center justify-start w-full h-fit py-2 pr-4 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 duration-100 cursor-pointer"
        >
          {postMake.placeholder}
        </span>
      </div>
      <div className="flex justify-between">
        <PostMakeButtons 
          title={"video"} 
          text={postMake.video} 
          icon={<IoVideocam />}
          setMakePost={setMakePost} 
        />
        <PostMakeButtons 
          title={"image"} 
          text={postMake.image} 
          icon={<IoMdPhotos />} 
          setMakePost={setMakePost} 
        />
        <PostMakeButtons 
          title={"tag"} 
          text={postMake.tag} 
          icon={<HiHashtag />} 
          setMakePost={setMakePost} 
        />
      </div>
      {makePost &&
        <div className="fixed right-0 left-0 top-0 bottom-0 flex justify-center w-screen h-screen bg-gray-700/80 z-40 overflow-hidden">
          <div className="flex flex-col w-full max-w-[600px] my-10 px-4 rounded-[1rem] bg-white dark:bg-gray-800">
            <PostEditHeader setMakePost={setMakePost} />
            <PostEdit clicked={makePost} />
          </div>
        </div>
      }
    </div>
  )
}

export default PostMake