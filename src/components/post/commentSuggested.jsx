import { post } from "@/assets/data/data"
import profile from "@/assets/images/profile.jpg"
import Image from "next/image"

const CommentSuggested = () => {
  return (
    <div className="flex w-full gap-2">
      <span className="relative w-10 min-w-10 h-10 rounded-full overflow-hidden">
        <Image 
          fill={true}
          src={profile}
          alt="profile picture"
        />
      </span>
      <div className="flex flex-col w-full h-fit px-2 pb-1 ml-10 bg-gray-200 dark:bg-gray-700 rounded-[.5rem] text-[.9rem]">
        <span>
          {post.name}
        </span>
        <span>
          {post.testComment}
        </span>
      </div>
    </div>
  )
}

export default CommentSuggested