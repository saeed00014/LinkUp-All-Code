import PostHeader from "./postHeader"
import PostFooter from "./postFooter"
import PostContent from "./postContent"
import Context from "./context"

const Post = ({post, isMyPost, miniEdition}) => {
  return (
    <Context post={post} isMyPost={isMyPost} miniEdition={miniEdition}>
      <article className={`flex flex-col ${miniEdition ? "min-w-[380px]" : "min-w-[550px]"}  rounded-[1rem] bg-white dark:bg-gray-800 dark:text-white gap-1 pt-3`}>
        <PostHeader />
        <PostContent />
        <PostFooter />
      </article>
    </Context>
  )
}

export default Post