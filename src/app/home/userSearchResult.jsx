import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"

const UserSearchResult = ({searchResult}) => {
  return (
    <div className="flex flex-col w-full rounded-[.3rem] h-screen bg-white dark:bg-gray-800 overflow-y-scroll z-30">
      {searchResult.map((user) => {
        return (
          <a
            href={`/profile/${user.id}`}
            className="group relative flex items-center justify-start w-full cursor-pointer"
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
          </a>
        )
      })}
    </div>
  )
}

export default UserSearchResult