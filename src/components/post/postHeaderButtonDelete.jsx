import { useContext, useState } from "react"
import { PostContext } from "@/context/context"
import { useMutation } from "@tanstack/react-query"
import { IoClose } from "react-icons/io5" 
import { baseURL } from "@/axios/axios"

const PostHeaderButtonDelete = () => {
  const { post } = useContext(PostContext)
  const [isDeleteActive, setIsDeleteActive] = useState(false)

  const deletePost = useMutation({
    mutationFn: async () => {
      const response = await baseURL.delete(`/post/${post.id}`)
      if(response.data.data.deleted) {
        location.reload("")
      }
    }
  })
  
  const handleDelete = () => {
    deletePost.mutate()
  }
  
  return (
    <>
      <button 
        onClick={() => setIsDeleteActive(true)} 
        className='relative flex items-center justify-center font-normal text-3xl min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] rounded-full hover:bg-gray-200 dark:hover:bg-gray-600'
      >
        <IoClose />
      </button>
      {isDeleteActive && 
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full bg-gray-500/25 dark:bg-gray-300/25 z-50">
          <div className="flex flex-col items-center justify-between w-[20rem] p-3 gap-5 rounded-[.3rem] bg-white dark:bg-gray-800 z-40">
            <span>  
              are you sure you want to delete this 
            </span>
            <div className="flex w-full gap-2">
              <button 
                onClick={handleDelete}
                className="w-full h-[2rem] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                ok
              </button>
              <button 
                onClick={() => setIsDeleteActive(false)}
                className="w-full h-[2rem] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                cancel
              </button>
            </div>
          </div>
          <div onClick={() => setIsDeleteActive(false)} className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full"></div>
        </div>
      }
    </>
  )
}

export default PostHeaderButtonDelete