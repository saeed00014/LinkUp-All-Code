import Post from "@/components/post/post"
import PostMake from "@/components/post/postMake"

const ProfilePost = () => {
  return (
    <div className="flex flex-col justify-start gap-6">
      <PostMake />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default ProfilePost