import { sideBar } from "@/assets/data/data"
import defaultImage from "@/assets/images/default.jpg"
import Image from "next/image"

const UserSearchResult = ({searchResult, type}) => {
  return (
    <div className={`absolute top-0 flex flex-col w-full rounded-[.3rem] h-screen ${type == "postShare" ? "max-h-[33.5rem] pt-[3.5rem]" : "pt-[3.6rem]" }  bg-white dark:bg-gray-800 overflow-y-scroll z-30`}>
      {searchResult.map((user) => {
        return (
          <div className={`group relative flex items-center justify-start w-full ${type == "postShare" ? "cursor-default" : "cursor-pointer"}`}>
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
      })}
    </div>
  )
}

export default UserSearchResult