import { useContext } from "react"
import { PostContext, PostShareContext } from "@/context/context"
import { useMutation } from "@tanstack/react-query"
import Image from "next/image"
import defaultImage from "@/assets/images/default.jpg"
import { postText } from "@/assets/data/data"
import { baseURL } from "@/axios/axios"

const PostShareUserPageFooter = () => {
  const { choosedUsers } = useContext(PostShareContext)
  const { post } = useContext(PostContext)
  const sendPost = useMutation({
    mutationFn: async (newChoosedUsers) => {
      const response = await baseURL.post(`/message/postShare?post_id=${post.id}`, {
        newChoosedUsers
      })
      return response
    }
  })
  
  const handleShare = () => {
    choosedUsers && sendPost.mutate(choosedUsers)
  }

  return (
    <div className="flex justify-between items-center w-full h-[4rem] px-4">
      <button 
        onClick={handleShare}
        className="px-4 py-2 rounded-[.5rem] bg-gray-700 hover:bg-gray-600"
      >
        {postText.share}
      </button>
      <div className="flex w-fit h-fit gap-1">
        {choosedUsers && choosedUsers.map((user) => {
          return (
            <span className="group relative w-10 h-10 flex items-center justify-center rounded-full -mr-4 border-black border-[1px]">
              <Image 
                fill={true}
                src={user.image || defaultImage}
                alt="profile picture"
                className="rounded-full"
              />
              <span className="group invisible group-hover:visible absolute -top-[3rem] flex flex-col justify-center items-start px-[.3rem] py-[.2rem] min-w-fit max-w-[6rem] min-h-fit max-h-[3rem] bg-gray-600 rounded-[.2rem] text-[.7rem] overflow-hidden">
                <span className="min-w-max">
                  .{user.firstname}
                </span>
                <span className="min-w-max">
                  .{user.username}
                </span>
              </span>
            </span>
          )
        })}    
      </div>
    </div>
  )
}

export default PostShareUserPageFooter