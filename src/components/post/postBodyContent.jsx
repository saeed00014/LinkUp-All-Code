import { useContext } from "react"
import { PostContext } from "@/context/context"
import Image from "next/image"

const PostBodyContent = () => {
  const { post } = useContext(PostContext)
  return (
    <div className="flex flex-col gap-2 text-[.9rem]">
      <p className="px-4 pt-[.2rem]">
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

export default PostBodyContent