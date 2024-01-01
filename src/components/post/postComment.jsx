import { post } from "@/assets/data/data"
import { FaRegComment } from "react-icons/fa"
import PostFooterButtons from "./postFooterButtons"

const PostComment = () => {
  return (
    <PostFooterButtons icon={<FaRegComment />} text={post.comment} />
  )
}

export default PostComment