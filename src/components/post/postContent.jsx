import Image from "next/image"
import { register } from "@/assets/data/data"
import postImage from "@/assets/images/post.jpg"

const PostContent = () => {
  return (
    <div className="flex flex-col gap-3 text-[.9rem]">
      <p className="px-4">
        {register.passRepeatedErorr}
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