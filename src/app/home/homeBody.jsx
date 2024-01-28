"use client"
import Post from '@/components/post/post'
import PostMake from '@/components/postMaker/postMake'
import { HomeContext } from '@/context/context'
import { useContext } from 'react'

const HomeBody = () => {
  const { loginUser, post, localLoginUser } = useContext(HomeContext)

  return (
    <div className='flex flex-col items-center w-full h-screen pt-4 pb-[10rem] gap-4 bg-gray-200 dark:bg-gray-950 overflow-y-scroll'>
      <PostMake 
        loginUser={loginUser} 
        localLoginUser={localLoginUser}
      />
      {post.map((post) => {
        return (
          <div key={post.id}>
            <Post 
              post={post} 
            />
          </div>
        )
      })}
    </div>
  )
}

export default HomeBody