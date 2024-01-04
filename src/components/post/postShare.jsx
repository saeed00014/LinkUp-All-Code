import { post } from "@/assets/data/data";
import { IoShareSocialOutline } from "react-icons/io5";
import PostFooterButtons from "./postFooterButtons";

const PostShare = () => {
  return (
    <PostFooterButtons 
      icon={<IoShareSocialOutline />} 
      text={post.share} 
    />
  )
}

export default PostShare