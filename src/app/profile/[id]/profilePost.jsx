"use client"
import { useContext, useEffect, useRef } from "react"
import Post from "@/components/post/post"
import { useIntersection } from "@mantine/hooks"
import { ProfileContext } from "@/context/context"

const ProfilePost = ({ posts, index }) => {
  const { isLoginUser, page, setPage } = useContext(ProfileContext)
  const lastPostRef = useRef(null)
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 0
  })

  useEffect(() => {
    if(entry && entry.isIntersecting) {
      setPage(page + 1)
    } 
  }, [entry])

  return (
    <>
      {posts[0] ? 
        posts.map((post, i) => {
          const isRef = (i + index == page * 4 - 1)
          if(isRef) {
            return (
              <div 
                ref={ref} 
                id={`ref${post.id}`} 
                key={post.id}
              >
                <Post
                  isMyPost={isLoginUser} 
                  post={post} 
                />
              </div>
            )
          }
          return (
            <div 
              id={post.id} 
              key={post.id}
            >
              <Post
                isMyPost={isLoginUser} 
                post={post} 
              />
            </div>
          )
        })
      : null
      }
    </>
  )
}

export default ProfilePost