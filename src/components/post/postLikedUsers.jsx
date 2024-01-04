import { FaRegHeart } from "react-icons/fa";

const PostLikedUsers = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer z-10">
      <span>
        7
      </span>
      <span>
        <FaRegHeart />
      </span>
    </div>
  )
}

export default PostLikedUsers