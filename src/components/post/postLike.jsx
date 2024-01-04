import { post } from "@/assets/data/data"
import { FaRegHeart } from "react-icons/fa";
import PostFooterButtons from "./postFooterButtons";

const PostLike = () => {
  return (
    <PostFooterButtons 
      icon={<FaRegHeart />} 
      text={post.like} 
    />
  )
}

export default PostLike