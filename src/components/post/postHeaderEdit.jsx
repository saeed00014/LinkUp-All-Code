import { FaRegEdit } from "react-icons/fa"
import { IoClose } from "react-icons/io5" 

const PostHeaderEdit = () => {
  return (
    <div className="flex items-center justify-between min-w-[5.5rem] w-fit">
      <span className="flex items-center justify-center text-2xl pb-1 cursor-pointer rounded-full min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px]">
        <FaRegEdit />
      </span>
      <button 
        onClick={() => setEvent(false)} 
        className='relative flex items-center justify-center font-normal text-3xl min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] rounded-full hover:bg-gray-200 dark:hover:bg-gray-600'
      >
        <IoClose />
      </button>
    </div>
  )
}

export default PostHeaderEdit