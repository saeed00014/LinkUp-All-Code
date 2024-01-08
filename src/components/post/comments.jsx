"use client"
import PostContent from "./postContent"
import CommentsFooter from "./commentsFooter"
import CloseHeader from "../closeHeader"
import PostHeader from "./postHeader"

const Comments = ({setIsAllCommentsActive}) => {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center bg-gray-300/50 z-[90]">
      <article className="flex flex-col w-[550px] min-w-[550px] h-fit pb-3 mb-4 rounded-[1rem] bg-white dark:bg-gray-800 dark:text-white ">
        <div className="px-3">
          <CloseHeader setEvent={setIsAllCommentsActive} title={"پست نسرین"} />
        </div>
        <div className="flex flex-col max-h-[88vh] overflow-y-scroll gap-1">
          <PostHeader />
          <PostContent />
          <CommentsFooter />
        </div>
      </article>
    </div>
  )
}

export default Comments