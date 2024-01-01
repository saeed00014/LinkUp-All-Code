import { sideBar } from "@/assets/data/data"
import Image from "next/image"
import test from "@/assets/images/profile.jpg"

const SideBarPapulars = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-fit px-3 py-2 gap-3">
      <span className="flex items-center justify-start w-full">
        {sideBar.papularUsers}
      </span>
      <div className="flex flex-col items-center justify-center w-full px-3 pt-5 pb-6 bg-gray-200 dark:bg-gray-700 rounded-[1rem] gap-3">
        <span className="flex justify-center">
          <Image 
            src={test}
            alt="user picture"
            className="object-cover w-16 min-w-16 rounded-full"
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
        <button className="flex items-center justify-center h-fit min-w-max py-2 px-4 text-[.8rem] bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-[.4rem]">
          {sideBar.follow}
        </button>
      </div>
    </div>
  )
}

export default SideBarPapulars