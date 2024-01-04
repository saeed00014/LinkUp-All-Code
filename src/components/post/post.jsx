import EditInfoButton from "./editInfoButton"
import PostLike from "./postLike"
import Image from "next/image"
import Link from "next/link"
import profile from "@/assets/images/profile.jpg"
import postImage from "@/assets/images/post.jpg"
import { post, register } from "@/assets/data/data"
import PostComment from "./postComment"
import PostShare from "./postShare"
import PostLikedUsers from "./postLikedUsers"
import CommentSuggested from "./commentSuggested"
import CommentInput from "./commentInput"

const Post = () => {
  return (
    <article className="flex flex-col min-w-[550px] rounded-[1rem] bg-white dark:bg-gray-800 dark:text-white gap-1 py-3">
      <header className="flex justify-between pl-6 pr-4 text-[.9rem]">
        <Link 
          href={"/profile"} 
          className="flex gap-4"
        >
          <span className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image 
              fill={true}
              src={profile}
              alt="profile picture"
            />
          </span>
          <div className="flex flex-col">
            <span>
              یاسمین  
            </span>
            <span>
              yasamin043
            </span>
          </div>
        </Link>
        <EditInfoButton />
      </header>
      <div className="flex flex-col gap-3 text-[.9rem]">
        <p className="px-4">
          {register.passRepeatedErorr}
        </p>
        <span className="relative flex max-w-[550px]">
          <Image 
            style={{objectFit: "contain"}}
            src={postImage}
            alt="profile picture"
          />
        </span>
      </div>
      <footer className="flex flex-col px-4 mt-1">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span>
              {post.comments}
            </span>
            <span>
              23
            </span>
          </div>
          <PostLikedUsers />
        </div>
        <div className="flex justify-between items-center py-1 mt-2 border-t-2 border-b-2 dark:border-gray-600 gap-1">
          <PostLike />
          <PostComment />
          <PostShare />
        </div>
        <div className="flex flex-col w-full gap-2">
          <span className="text-[.8rem] hover:underline cursor-pointer">
            {post.allComments}
          </span>
          <CommentSuggested />
          <CommentInput />
        </div>
      </footer>
    </article>
  )
}

export default Post