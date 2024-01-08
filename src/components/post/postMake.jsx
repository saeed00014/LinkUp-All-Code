"use client"
import { useState } from "react"
import { HiHashtag } from "react-icons/hi"
import { IoMdPhotos } from "react-icons/io"
import { IoVideocam } from "react-icons/io5"
import Image from "next/image"
import PostMakeButtons from "./postMakeButtons"
import PostMaker from "./postMaker"
import { postMake } from "@/assets/data/data"
import profile from "@/assets/images/profile.jpg"

const PostMake = () => {
  const [isMakePostActive, setIsMakePostActive] = useState(false)

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
          onClick={() => setIsMakePostActive("text")} 
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
          setMakePost={setIsMakePostActive} 
        />
        <PostMakeButtons 
          title={"image"} 
          text={postMake.image} 
          icon={<IoMdPhotos />} 
          setMakePost={setIsMakePostActive} 
        />
        <PostMakeButtons 
          title={"tag"} 
          text={postMake.tag} 
          icon={<HiHashtag />} 
          setMakePost={setIsMakePostActive} 
        />
      </div>
      {isMakePostActive &&
        <PostMaker setIsMakePostActive={setIsMakePostActive} />
      }
    </div>
  )
}

export default PostMake