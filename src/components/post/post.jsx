import PostHeader from "./postHeader"
import PostFooter from "./postFooter"
import PostContent from "./postContent"
import Context from "./context"

const Post = ({post}) => {
  return (
    <article className="flex flex-col min-w-[550px] rounded-[1rem] bg-white dark:bg-gray-800 dark:text-white gap-1 py-3">
      <Context post={post}>
        <PostHeader />
        <PostContent />
        <PostFooter />
      </Context>
    </article>
  )
}

export default Post