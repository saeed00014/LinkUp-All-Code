"use client"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import { useRouter } from "next/navigation"

const UserSearchResult = ({user}) => {
  const router = useRouter()
  const handleClick = (user) => {
    router.push(`/profile/${user.id}`)
  }

  return (
    <div
      onClick={() => handleClick(user)}
      className="group relative flex items-center justify-start w-full cursor-pointer border-b-[1px] dark:border-gray-600 border-gray-400"
    >
      <div className="flex w-full py-2 px-3 gap-2 hover:bg-gray-700">
        <span className="flex justify-center">
          <Image 
            src={user.image || defaultImage}
            width={50}
            height={50}
            alt="user picture"
            className="object-cover w-12 min-w-12 rounded-full"
          />
        </span>
        <div className="flex flex-col justify-center items-start text-[.9rem]">
          <span>
            {user.firstname}
          </span>
          <span>
            {user.username}
          </span>
        </div>
      </div>
    </div>
  )
}

export default UserSearchResult