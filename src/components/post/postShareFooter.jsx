import { postText } from "@/assets/data/data"

const PostShareFooter = () => {
  return (
    <div className="flex justify-between items-center w-full h-[4rem]">
      <button className="px-4 py-2 rounded-[.5rem] bg-gray-700 hover:bg-gray-600">
        {postText.share}
      </button>
      <div>
      
      </div>
    </div>
  )
}

export default PostShareFooter