"use client"
import { useContext } from "react"
import { ProfileContext } from "@/context/context"
import PostMake from "@/components/postMaker/postMake"
import Post from "@/components/post/post"

const ProfilePost = () => {
  const { user, posts, isLoginUser } = useContext(ProfileContext)
  return (
    <div className="flex flex-col justify-start gap-6">
      {isLoginUser && <PostMake LoginUser={user} />}
      {posts[0] ? 
        posts.map((post) => {
          return (
            <div key={post.id}>
              <Post post={post} />
            </div>
          )
        }) 
        : <div className="flex flex-col items-center justify-center min-w-[550px] rounded-[.5rem] bg-white dark:bg-gray-800 dark:text-white gap-1 py-3 mt-6">there is no post here yet</div>
      }
    </div>
  )
}

export default ProfilePost