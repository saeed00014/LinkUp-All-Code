import { useContext } from "react"
import { PostContext } from "@/context/context"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import Link from "next/link"
import PostHeaderEdit from "./postHeaderEdit"
import PostHeaderinfo from "./postHeaderinfo"

const PostHeader = ({commentEdition}) => {
  const { post, postUser, isMyPost, miniEdition } = useContext(PostContext)
  return (
    <header className={`flex justify-between ${miniEdition && !commentEdition ? "px-2" : "px-4"}  text-[.9rem]`}>
      <Link 
        href={`/profile/${post.user_id}`} 
        className="flex gap-4 w-full"
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
      {isMyPost ? 
        <PostHeaderEdit />
      : 
        <PostHeaderinfo />
      } 
    </header>
  )
}

export default PostHeader