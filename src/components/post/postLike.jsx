import { useContext } from "react"
import { PostContext } from "@/context/context"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import PostFooterButtons from "./postFooterButtons"
import { postText } from "@/assets/data/data"
import { useMutation } from "@tanstack/react-query"
import { baseURL } from "@/axios/axios"

const PostLike = () => {
  const { post, isLiked, setIsLiked, setLikeCount } = useContext(PostContext)
  const post_id = post.id
  const likedPostsIdStorage = JSON.parse(localStorage.getItem("likedPostsId"))
  
  const mutationLike = useMutation({
    mutationFn: async () => {
      const response = await baseURL.post(`/like?post_id=${post.id}`)
      setLikeCount(count => count + 1)
      if(response) {
        likedPostsIdStorage ? 
          (likedPostsIdStorage.push({post_id}) && 
            localStorage.setItem("likedPostsId", 
              JSON.stringify(likedPostsIdStorage)
            )
          )
        : 
          localStorage.setItem("likedPostsId", 
            JSON.stringify([{post_id}])
        )
      }
    }
  })

  const mutationDisLike = useMutation({
    mutationFn: async () => {
      const response = await baseURL.delete(`/like?post_id=${post.id}`)
      setLikeCount(count => count - 1)
      if(response) {
          const filteredPostsStorage = likedPostsIdStorage.filter((post_id) => post_id.post_id != post.id)
          localStorage.setItem("likedPostsId", 
            JSON.stringify(filteredPostsStorage)
          )
      }
    }
  })
  
  const handleLike = () => {
    !isLiked && mutationLike.mutate()
    isLiked && mutationDisLike.mutate()
    setIsLiked(!isLiked)
  }
  return (
    <div 
      className="w-full"
      onClick={handleLike}
    >
      <PostFooterButtons 
        icon={isLiked ? <FaHeart /> : <FaRegHeart />} 
        text={postText.like} 
      />
    </div>
  )
}

export default PostLike