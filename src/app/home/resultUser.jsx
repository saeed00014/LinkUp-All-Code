import { sideBar } from "@/assets/data/data"
import Image from "next/image"
import test from "@/assets/images/profile.jpg"

const ResultUser = () => {
  return (
    <div className="flex items-center justify-start w-full py-2 px-3 border-b border-gray-500 dark:border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 gap-3 cursor-pointer">
      <span className="flex justify-center">
        <Image 
          src={test}
          alt="user picture"
          className="object-cover w-12 min-w-12 rounded-full"
        />
      </span>
      <div className="flex flex-col justify-center items-center">
        <span>
          {sideBar.name}
        </span>
        <span>
          {sideBar.id}
        </span>
      </div>
    </div>
  )
}

export default ResultUser