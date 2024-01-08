"use client"
import PostLike from "./postLike"
import PostComment from "./postComment"
import PostShare from "./postShare"
import CommentInput from "./commentInput"
import PostFooterTop from "./postFooterTop"
import Message from "../message"

const CommentsFooter = () => {

  return (
    <footer className="flex flex-col px-4 mt-1">
      <PostFooterTop />
      <div className="flex justify-between items-center py-1 mt-2 border-t-2 border-b-2 dark:border-gray-600 gap-1">
        <PostLike />
        <PostComment />
        <PostShare />
      </div>
      <div className="flex flex-col w-full min-h-[15rem] gap-2 mt-2">
        <ul className="relative flex flex-col w-full h-full justify-start items-start py-2 px-2 gap-1">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </ul>
        <CommentInput type="comments" />
      </div>
    </footer>
  )
}

export default CommentsFooter