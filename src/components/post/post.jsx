import PostHeader from "./postHeader"
import PostFooter from "./postFooter"
import PostContent from "./postContent"
import Context from "./context"

const Post = ({post}) => {
  return (
    <Context post={post}>
      <article className="flex flex-col min-w-[550px] rounded-[1rem] bg-white dark:bg-gray-800 dark:text-white gap-1 py-3">
        <PostHeader />
        <PostContent />
        <PostFooter />
      </article>
    </Context>
  )
}

export default Post