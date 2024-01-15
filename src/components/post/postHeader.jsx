import { useContext } from "react"
import { PostContext } from "@/context/context"
import { FaRegEdit } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"

const PostHeader = () => {
  const { post, postUser } = useContext(PostContext)
  return (
    <header className="flex justify-between pl-6 pr-4 text-[.9rem]">
      <Link 
        href={`/profile/${post.user_id}`} 
        className="flex gap-4"
      >
        <span className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image 
            fill={true}
            src={postUser.image || defaultImage}
            alt="profile picture"
          />
        </span>
        <div className="flex flex-col">
          <span>
            {postUser.firstname} 
          </span>
          <span>
            {postUser.username}
          </span>
        </div>
      </Link>
      <div className="flex items-center">
        <span className="text-2xl cursor-pointer rounded-full ">
          <FaRegEdit />
        </span>
      </div>
    </header>
  )
}

export default PostHeader