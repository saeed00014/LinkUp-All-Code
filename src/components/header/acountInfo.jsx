"use client"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import Link from "next/link"
import { RiMoreFill } from "react-icons/ri"
import { useContext } from "react"
import { HeaderUserLogin } from "@/context/context"

const AcountInfo = () => {
  const { LoginUser } = useContext(HeaderUserLogin)

  return (
    <div className="sticky bottom-0 flex xl:justify-between justify-start items-center w-full h-fit xl:pr-2 xl:py-2 rounded-[.6rem] xl:bg-gray-100 hover:bg-gray-200 dark:xl:bg-gray-700 dark:hover:bg-gray-600 duration-100 cursor-pointer">
      <Link 
        href={`/profile/${LoginUser.id}`} 
        className="flex w-full h-fit gap-2"
      >
        <span className="relative w-14 h-14">
          <Image 
            fill={true}
            src={LoginUser.image || defaultImage}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="xl:flex hidden flex-col">
          <span>
            {LoginUser.firstname}  
          </span>
          <span>
            {LoginUser.username}
          </span>
        </div>
      </Link>
      <span className="xl:flex hidden text-2xl p-2 rounded-full">  
        <RiMoreFill />
      </span>
    </div>
  )
}

export default AcountInfo