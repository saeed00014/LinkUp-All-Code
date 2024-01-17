import { useContext } from "react"
import { HomeContext } from "@/context/context"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import { sideBar } from "@/assets/data/data"
import { useMutation } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"

const SideBarSuggestion = () => {
  const { loginUser, suggestedUsers } = useContext(HomeContext)
  const mutation = useMutation({
    mutationFn: async (newFollow) => {
      const response = await baseURL.post(`/follow/following?targetUser_id=${newFollow.id}`)
      console.log(response)
    }
  })
  
  const handleFollow = (user) => {
    mutation.mutate(user)
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-fit px-3 py-2 gap-3">
      <span className="flex items-center justify-start w-full">
        {sideBar.papularUsers}
      </span>
      {suggestedUsers && 
        suggestedUsers.map((user) => {
          return (
            <div className="flex flex-col items-center justify-center w-full px-3 pt-3 pb-3 bg-gray-200 dark:bg-gray-700 rounded-[1rem] gap-2">
              <a
                href={`/profile/${user.id}`} 
                className="relative w-20 h-20 rounded-full overflow-hidden cursor-pointer"
              >
                <Image 
                  fill={true}
                  src={user.image || defaultImage}
                  alt="profile picture"
                />
              </a>
              <div className="flex flex-col justify-center items-center">
                <span>
                  {user.firstname}
                </span>
                <span>
                  {user.username}
                </span>
              </div>
              <button 
                onClick={() => handleFollow(user)}
                className="flex items-center justify-center h-fit min-w-max py-2 px-4 text-[.8rem] bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-[.4rem]"
              >
                {sideBar.follow}
              </button>
            </div>
          )
        })}
    </div>
  )
}

export default SideBarSuggestion