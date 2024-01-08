import PostHeader from "./postHeader"
import PostFooter from "./postFooter"
import PostContent from "./postContent"

const Post = () => {
  return (
    <article className="flex flex-col min-w-[550px] rounded-[1rem] bg-white dark:bg-gray-800 dark:text-white gap-1 py-3">
      <PostHeader />
      <PostContent />
      <PostFooter />
    </article>
  )
}

export default Post