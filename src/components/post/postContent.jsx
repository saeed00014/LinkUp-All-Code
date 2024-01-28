import { useContext } from "react"
import { PostContext } from "@/context/context"
import Image from "next/image"

const PostContent = () => {
  const { post } = useContext(PostContext)
  return (
    <div className="flex flex-col gap-3 text-[.9rem]">
      <p className="px-4">
        {post.text}
      </p>
      {post.image && 
        <span className="relative flex max-w-[550px]">
          <Image 
            src={post.image}
            width={550}
            height={100}
            alt="post picture"
            className="object-contain"
          />
        </span>
      }
    </div>
  )
}

export default PostContent