import { sideBar } from "@/assets/data/data"
import Image from "next/image"
import test from "@/assets/images/profile.jpg"

const UserSearchResult = ({type}) => {
  return (
    <div className={`group relative flex items-center justify-start w-full ${type == "postShare" ? "cursor-default" : "cursor-pointer"}`}>
      <div className="flex w-full py-2 px-3 gap-2 hover:bg-gray-700">
        <span className="flex justify-center">
          <Image 
            src={test}
            alt="user picture"
            className="object-cover w-12 min-w-12 rounded-full"
          />
        </span>
        <div className="flex flex-col justify-center items-start text-[.9rem]">
          <span>
            {sideBar.name}
          </span>
          <span>
            {sideBar.id}
          </span>
        </div>
      </div>
      {type == "postShare" &&
        <span className="absolute left-0 flex items-center">
          <label 
            htmlFor="checkbox"
            className="flex w-[2rem] h-[2rem] hover:bg-gray-500 rounded-full border-2 dark:border-gray-500 border-gray-300 cursor-pointer"
          ></label>
          <input 
            type="checkbox" 
            name="checkbox"
            id="checkbox"
            className="invisible"
          />
        </span>
      }
    </div>
  )
}

export default UserSearchResult