import Link from "next/link"
import Image from "next/image"
import EditInfoButton from "./editInfoButton"
import profile from "@/assets/images/profile.jpg"

const PostHeader = () => {
  return (
    <header className="flex justify-between pl-6 pr-4 text-[.9rem]">
      <Link 
        href={"/profile"} 
        className="flex gap-4"
      >
        <span className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
          />
        </span>
        <div className="flex flex-col">
          <span>
            یاسمین  
          </span>
          <span>
            yasamin043
          </span>
        </div>
      </Link>
      <EditInfoButton />
    </header>
  )
}

export default PostHeader