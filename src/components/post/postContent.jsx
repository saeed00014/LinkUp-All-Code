import { useContext } from "react"
import { PostContext } from "@/context/context"
import Image from "next/image"
import postImage from "@/assets/images/post.jpg"

const PostContent = () => {
  const { post } = useContext(PostContext)
  return (
    <div className="flex flex-col gap-3 text-[.9rem]">
      <p className="px-4">
        {post.text}
      </p>
      <span className="relative flex max-w-[550px]">
        <Image 
          style={{objectFit: "contain"}}
          src={postImage}
          alt="profile picture"
        />
      </span>
    </div>
  )
}

export default PostContent