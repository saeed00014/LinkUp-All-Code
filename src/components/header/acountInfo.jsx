import Image from "next/image"
import profile from "@/assets/images/profile.jpg"
import Link from "next/link"
import { RiMoreFill } from "react-icons/ri"

const AcountInfo = () => {
  return (
    <div className="flex xl:justify-between justify-start items-center w-full h-fit xl:pr-2 xl:py-2 rounded-[.6rem] xl:bg-gray-100 hover:bg-gray-200 dark:xl:bg-gray-700 dark:hover:bg-gray-600 duration-100 cursor-pointer">
      <Link 
        href={"/profile"} 
        className="flex w-full h-fit gap-2"
      >
        <span className="relative w-14 h-14">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="xl:flex hidden flex-col">
          <span>
            یاسمین  
          </span>
          <span>
            yasamin043
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