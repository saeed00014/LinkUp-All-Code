import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import PostFooterButtons from "./postFooterButtons"
import { post } from "@/assets/data/data"

const PostLike = ({setIsLiked, isLiked}) => {
  return (
    <div 
      className="w-full"
      onClick={() => setIsLiked(!isLiked)}
    >
      <PostFooterButtons 
        icon={isLiked ? <FaHeart /> : <FaRegHeart />} 
        text={post.like} 
      />
    </div>
  )
}

export default PostLike